import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateEntrenamientoDto } from './dto/create-entrenamiento.dto';
import { UpdateEntrenamientoDto } from './dto/update-entrenamiento.dto';
import { PrismaService } from "src/prisma.service";

@Injectable()
export class EntrenamientoService {

  constructor (private readonly prisma:PrismaService){}

  async create(createEntrenamientoDto: CreateEntrenamientoDto) {
    try {
      const newEntrenamiento = await this.prisma.entrenamiento.create(
        {data:{   fecha: new Date(createEntrenamientoDto.fecha), // Asegúrate de convertir la fecha correctamente si es necesario
          usuario_id: createEntrenamientoDto.usuario_id, 
          rutina_id: createEntrenamientoDto.rutina_id
        },});
      return newEntrenamiento;
    } catch (error) {
      throw new BadRequestException("Hubo un problema al crear el entrenamiento: "+error.message);
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

  async update(id: number, updateEntrenamientoDto: UpdateEntrenamientoDto) {
    try {
      const entrenamiento = this.prisma.entrenamiento.findFirst({where:{id:id},});
      if (!entrenamiento) { throw new BadRequestException ("El entrenamiento no se encuentra el la BD");}
      const entrenamientoModificado = this.prisma.entrenamiento.update({where:{id:id}, data: updateEntrenamientoDto,});
      return entrenamientoModificado;
    } catch (error) {
      throw new BadRequestException("Hubo un problema al actualizar los datos en el entrenamiento: "+error.message);
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
