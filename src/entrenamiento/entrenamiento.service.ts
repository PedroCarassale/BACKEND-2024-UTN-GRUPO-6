import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateEntrenamientoDto } from './dto/create-entrenamiento.dto';
import { UpdateEntrenamientoDto } from './dto/update-entrenamiento.dto';
import { PrismaService } from "src/prisma.service";

@Injectable()
export class EntrenamientoService {

  constructor (private readonly prisma:PrismaService){}

  async create(data: { rutina_id: number; usuario_id: number; fecha: Date }) {
    try {
      const newEntrenamiento = await this.prisma.entrenamiento.create({
        data: {
          fecha: data.fecha, // Fecha ya convertida
          usuario_id: data.usuario_id,
          rutina_id: data.rutina_id,
        },
      });
  
      return newEntrenamiento;
    } catch (error) {
      throw new BadRequestException(
        'Hubo un problema al crear el entrenamiento: ' + error.message,
      );
    }
  }

 

  async findOne(usuario_id: number, fecha: Date) {
    try {
      const entrenamiento = await this.prisma.entrenamiento.findFirst({where: {usuario_id: usuario_id, fecha:fecha},select: {
        rutina_id: true,
        fecha: true,
      },});
      if (!entrenamiento) {
        throw new BadRequestException("Datos invalidos: No se encontro entrenamiento con esos datos");
      }
      return entrenamiento;
    } catch (error) {
      throw new BadRequestException("Hubo un problema al recuperar el entrenamiento: "+error.message);
    }
  }

  async findEntrenamientosByUsuarioYMes(usuario_id: number, year: number, month: number) {
    try {
      // Generar el rango de fechas
      const inicioMes = new Date(year, month - 1, 1); // Primer día del mes
      const finMes = new Date(year, month, 1); // Primer día del mes siguiente
  
      const entrenamientos = await this.prisma.entrenamiento.findMany({
        where: {
          usuario_id: usuario_id,
          fecha: {
            gte: inicioMes, // Desde el primer día del mes
            lt: finMes,     // Hasta el último día del mes
          },
        },
        select: {
          rutina_id: true,
          fecha: true,
        },
      });
  
      return entrenamientos;
    } catch (error) {
      throw new BadRequestException(
        'Error al recuperar entrenamientos del mes: ' + error.message,
      );
    }
  }

  async update(
    id: number,
    data: { rutina_id?: number; usuario_id?: number; fecha?: Date },
  ) {
    try {
      const updatedEntrenamiento = await this.prisma.entrenamiento.update({
        where: { id },
        data: {
          ...data, // Actualiza solo los campos proporcionados
        },
      });
  
      return updatedEntrenamiento;
    } catch (error) {
      throw new BadRequestException(
        'Hubo un problema al actualizar el entrenamiento: ' + error.message,
      );
    }
  }
  

  async remove(id: number) {
    try {
        const entrenamiento= this.prisma.entrenamiento.findUnique({where: {id:id},})
        if(!entrenamiento) {
          throw new BadRequestException("No se encontró ningun entrenamiento con esa id");
        }
        await this.prisma.entrenamiento.delete({where: {id:id},});
        return "Entrenamiento eliminado con exito.";
    } catch (error) {
      throw new BadRequestException("Hubo un problema al eliminar: "+error.message);
    }
  }

  async findRutinas(usuario_id: number) {
    try {
      const rutinas = await this.prisma.entrenamiento.findMany({
        where: {
          usuario_id: usuario_id,
        },
        select: {
          rutina: {
            select: {
              id: true,
              nombre: true,
            },
          },
        },
        distinct: ['rutina_id'], // Asegura que no haya duplicados.
      });

      if (!rutinas) { throw new BadRequestException ("Error al recuperar las rutinas: Id de usuario invalido"); }
    
      return rutinas.map((entrenamiento) => entrenamiento.rutina); // Devuelve solo las rutinas.
    }
     catch (error) {
      throw new BadRequestException("Hubo un problema al recuperar las rutinas: "+error.message);
    }
  }

}
