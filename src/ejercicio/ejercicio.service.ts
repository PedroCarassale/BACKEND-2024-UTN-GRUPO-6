import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEjercicioDto } from './dto/create-ejercicio.dto';
import { UpdateEjercicioDto } from './dto/update-ejercicio.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class EjercicioService {

  constructor(private prisma:PrismaService){

  }

  async create(createEjercicioDto: CreateEjercicioDto) {
    try {
      const newEjercicio= await this.prisma.ejercicio.create({data:createEjercicioDto,});
    return {
      
        message: "Ejercicio creado con exito!",
        Ejercicio: newEjercicio,
    };
    } catch (error) {
      console.error("Hubo un error en la incripción: " + error.message);
      throw error;
    }
    
    
  }

  async findAll() {

    try {
      const ejercicios = this.prisma.ejercicio.findMany();
    if (!ejercicios) {
      return ("No hay ejercicios registrados.")
    } else {
      return ejercicios;
    }
    } catch (error) {
      console.error("Ha ocurrido un error: " + error.message);
      throw error; 
    }
    
  }

  async findOne(id: number) {
    try {
      const encontrado = this.prisma.ejercicio.findUnique({where: {id:id,},})
   if (!encontrado) {return "El ejercicio no se encuentra"}
      else {return encontrado;}
    } catch (error) {
      console.error("Ha ocurrido un error: " + error.message);
      throw error;
      
    }
   
  }

  async update(id: number, updateEjercicioDto: UpdateEjercicioDto, isPatch:boolean) {
    try {

      if (isNaN(Number(id))) {
          throw new BadRequestException('El ID proporcionado no es válido'); // Valido el id.
        }
      const ejercicioExistente = await this.prisma.ejercicio.findUnique({
          where: { id: Number(id) },
      });
      if (!ejercicioExistente) {
          throw new NotFoundException('El ejercicio que desea modificar no se encuentra'); // Si no encuentra muestro un mensaje de error.
        }

        if (!isPatch) {
          const { nombre } = updateEjercicioDto;
          if (!nombre) {
              throw new BadRequestException('El campo nombre es obligatorio.');
          }
      }


      // Actualiza el gimnasio con los nuevos datos
      const ejercicioActualizado = await this.prisma.ejercicio.update({
          where: { id: Number(id) },
          data: updateEjercicioDto,
      });

      return ejercicioActualizado; // Retorna el gimnasio actualizado
  } catch (error) {
      console.error('Error al actualizar el ejercicio:', error.message);
      throw error;
  }
  }

  async remove(id: number) {

    try {

      if (isNaN(Number(id))) {
        throw new BadRequestException('El ID proporcionado no es válido'); // Valido el id.
      }
    const ejercicioExistente = await this.prisma.ejercicio.findUnique({
        where: { id: Number(id) },
    });
    if (!ejercicioExistente) {
        throw new NotFoundException('El ejercicio que desea eliminar no se encuentra'); // Si no encuentra muestro un mensaje de error.
      }
    
    // Elimino el ejercicio
    await this.prisma.ejercicio.delete({
      where: { id: Number(id) },
      });
  
    return { message: 'Ejercicio eliminado con éxito' }; // Retorna el mensaje.
      
    } catch (error) {
      console.error('Error al eliminar el gimnasio:', error.message);
            throw error;
    }

   

  }
}
