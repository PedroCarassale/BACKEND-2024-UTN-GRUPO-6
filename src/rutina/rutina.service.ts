import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateRutinaDto } from './dto/create-rutina.dto';
import { UpdateRutinaDto } from './dto/update-rutina.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RutinaService {

  constructor(private prisma:PrismaService){

  }

  async create(createRutinaDto: CreateRutinaDto) {
    const { nombre, imagen_url, descanso_entre_ejercicios, gimnasio_id, usuario_id, ejercicios } = createRutinaDto;
  
    try {
      // Crea la rutina
      const rutina = await this.prisma.rutina.create({
        data: {
          nombre,
          imagen_url,
          descanso_entre_ejercicios,
          usuario_id,
          gimnasio_id,
        },
      });
  
      // Crea las ejerciciorutina (tabla intermedia entre rutina y ejercicio)
      if (ejercicios && ejercicios.length > 0) {
        await this.prisma.ejerciciorutina.createMany({
          data: ejercicios.map((ejercicio) => ({
            rutina_id: Number(rutina.id),
            ejercicio_id: ejercicio.ejercicio_id,
            descanso_entre_series: ejercicio.descanso_entre_series,
            intensidad: ejercicio.intensidad,
            series_x_repeticiones: ejercicio.series_x_repeticiones, // Verifica que el nombre coincida con el modelo
          })),
        });
      }
  
      return rutina;
  
    } catch (error) {
      // Manejo de errores
      console.error('Error al crear la rutina:', error);
      throw new Error('No se pudo crear la rutina. Intenta nuevamente más tarde.'); // Mensaje de error personalizado
    }
  }
  

  async findAll() {
    try {
      const rutinas = this.prisma.rutina.findMany();
    if (!rutinas) {
      return ("No hay Rutinas registradas.")
    } else {
      return rutinas;
    }
    } catch (error) {
      console.error("Ha ocurrido un error: " + error.message);
      throw error; 
    }
  }

  async findOne(id: number) {
    try {
      const encontrado = this.prisma.rutina.findUnique({where: {id:id,},})
   if (!encontrado) {return "La rutina no se encuentra"}
      else {return encontrado;}
    } catch (error) {
      console.error("Ha ocurrido un error: " + error.message);
      throw error;
      
    }
  }

  async buscarEjerciciosPorRutina(id: number) {
    try {
      const ejercicios = this.prisma.ejerciciorutina.findMany({where: {rutina_id:id,},})
   if (!ejercicios) {return "La rutina no se encuentra no se encuentra"}
      else {return ejercicios;}
    } catch (error) {
      console.error("Ha ocurrido un error: " + error.message);
      throw error;
      
    }
  }

  update(id: number, updateRutinaDto: UpdateRutinaDto) {
    return `This action updates a #${id} rutina`;
  }

  async remove(id: number) {
    try {

      if (isNaN(Number(id))) {
        throw new BadRequestException('El ID proporcionado no es válido'); // Valido el id.
      }
    const ejercicioExistente = await this.prisma.rutina.findUnique({
        where: { id: Number(id) },
    });
    if (!ejercicioExistente) {
        throw new NotFoundException('La rutina que desea eliminar no se encuentra'); // Si no encuentra muestro un mensaje de error.
      }
    
    // Elimino el ejercicio
    await this.prisma.rutina.delete({
      where: { id: Number(id) },
      });
  
    return { message: 'Rutina eliminada con éxito' }; // Retorna el mensaje.
      
    } catch (error) {
      console.error('Error al eliminar la rutina:', error.message);
            throw error;
    }
  }

  async findRutinasDeUsuario (id: number) {
    try {
      const rutinas = await this.prisma.rutina.findMany({
        where: { usuario_id: id },
        select: { id: true, nombre: true },
      });
      return rutinas;
    }  catch (error) {
      throw new BadRequestException("Error al consultar las rutinas en la BD: " + error.message);
    }
  }

  async findRutinasDeGimnasio(id: number) {
    try {
      const rutinas = await this.prisma.rutina.findMany({
        where: { gimnasio_id: id },
        select: { id: true, nombre: true },
      });
      return rutinas;
    } catch (error) {
      throw new BadRequestException("Error al consultar las rutinas en la BD: " + error.message);
    }
  }
  

}
