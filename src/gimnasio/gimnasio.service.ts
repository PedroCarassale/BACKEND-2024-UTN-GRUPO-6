import {BadRequestException, Injectable, NotFoundException} from "@nestjs/common" // Es un decordador de propiedad.
import { createGimnasioDto } from "./dto/create-gimnasio.dto";
import { PrismaService } from "src/prisma.service";
import { updateGimnasioDto } from "./dto/update-gimnasio.dto";
// Injectable se utiliza principalmente para declarar una clase como un proveedor, es decir, puede ser injectado en otros componentes de la app.
@Injectable({}) // Quiere decir que puede ser injectada en otro lado por ejemplo en GimnasioController.
export class GimnasioService {
    constructor(private prisma: PrismaService){
        // Inyecto una instancia de la clase PrismaService, para interactuar con la BD y poder realizar operaciones (CRUD, transacciones, consultas complejas, etc.) dentro de la clase GimnasioService.
    }
      
    async getAllGimnasios() {

        try {
            return await this.prisma.gimnasio.findMany();
        } catch (error) {
            console.error('Error en el servicio:', error.message);
            throw error;
        }
        
    }  

    async getGimnasioById(id){

        try {

            if (isNaN(Number(id))) {
                throw new BadRequestException('El ID proporcionado no es válido'); // Valido el id.
              }

            const gimnasio = await this.prisma.gimnasio.findUnique({where: {id: Number(id),},}); // Busco en la BD.
            
            if (!gimnasio) {
                throw new NotFoundException('Gimnasio no encontrado'); // Si no encuentra muestro un mensaje de error.
              }

            return gimnasio;// Si lo encuentro retorno el objeto.
               
        } catch (error) {
            console.error('Error en el servicio:', error.message);
            throw error;
        }
        
    }

    async createGimnasio(gimnasio:createGimnasioDto){
        try {
            
            const nuevoGimnasio = await this.prisma.gimnasio.create({
                data: gimnasio,
              });
              return nuevoGimnasio;
        } catch (error) {
            console.error('Error al crear el gimnasio:', error.message);
            throw error;
        }
        
    }

    async updateGimnasio(id,gimnasio:updateGimnasioDto, isPatch:boolean){
        try {

            if (isNaN(Number(id))) {
                throw new BadRequestException('El ID proporcionado no es válido'); // Valido el id.
              }
            const gimnasioExistente = await this.prisma.gimnasio.findUnique({
                where: { id: Number(id) },
            });
            if (!gimnasioExistente) {
                throw new NotFoundException('El gimnasio que desea modificar no se encuentra'); // Si no encuentra muestro un mensaje de error.
              }

              if (!isPatch) {
                const { nombre, direccion, ciudad } = gimnasio;
                if (!nombre || !direccion || !ciudad) {
                    throw new BadRequestException('Los campos nombre, direccion y ciudad son obligatorios.');
                }
            }
    

            // Actualiza el gimnasio con los nuevos datos
            const gimnasioActualizado = await this.prisma.gimnasio.update({
                where: { id: Number(id) },
                data: gimnasio,
            });

            return gimnasioActualizado; // Retorna el gimnasio actualizado
        } catch (error) {
            console.error('Error al actualizar el gimnasio:', error.message);
            throw error;
        }
    }

    async deleteGimnasio(id) {
        try {

            if (isNaN(Number(id))) {
                throw new BadRequestException('El ID proporcionado no es válido'); // Valido el id.
              }
            const gimnasioExistente = await this.prisma.gimnasio.findUnique({
                where: { id: Number(id) },
            });
            if (!gimnasioExistente) {
                throw new NotFoundException('El gimnasio que desea eliminar no se encuentra'); // Si no encuentra muestro un mensaje de error.
              }

            // Elimino el gimnasio
            await this.prisma.gimnasio.delete({
                where: { id: Number(id) },
            });
    
            return { message: 'Gimnasio eliminado con éxito' }; // Retorna el mensaje.
        } catch (error) {
            console.error('Error al eliminar el gimnasio:', error.message);
            throw error;
        }
    }
}

