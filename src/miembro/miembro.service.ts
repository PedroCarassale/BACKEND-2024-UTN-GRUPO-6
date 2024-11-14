import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateMiembroDto } from './dto/create-miembro.dto';
import { UpdateMiembroDto } from './dto/update-miembro.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MiembroService {
  constructor(private prisma:PrismaService){

  }

  async validateUser(id:number) {
    try {
      const usuarioExistente = await this.prisma.usuario.findUnique({
        where: { id: Number(id) },
      });
  
      if (!usuarioExistente) {
        throw new NotFoundException(`El usuario no se enceuntra en la BD`);
      }
    } catch (error) {
      console.error("Hubo un error en la validacion del usuario"+error.message);
      throw error;
    }
  }

  async inscribirEnGimnasio(createMiembroDto: CreateMiembroDto) {
    try {
          const { cliente_id, gimnasio_id }  = createMiembroDto; // ---> Obtengo los parametros del objeto.
          // Convertir usuario_id y gimnasio_id a enteros si vienen como cadenas
          const usuarioIdInt = parseInt(cliente_id as unknown as string, 10); // Si usuario_id es de tipo string
          const gimnasioIdInt = parseInt(gimnasio_id as unknown as string, 10);
          // Verifico si el usuario existe
          const usuarioExistente = await this.prisma.usuario.findUnique({
              where: { id: usuarioIdInt},
          });

          if (!usuarioExistente) {
              throw new NotFoundException(`Usuario con ID ${cliente_id} no encontrado`);
          }

          // Verificar si el gimnasio existe
          const gimnasioExistente = await this.prisma.gimnasio.findUnique({
              where: { id: gimnasioIdInt },
          });

          if (!gimnasioExistente) {
              throw new NotFoundException(`Gimnasio con ID ${gimnasio_id} no encontrado`);
          }


          // Si todos los chequeos pasan, creo el registro en la tabla miembro.
          const nuevoMiembro = await this.prisma.membresia.create({
              data: {
                 cliente_id : usuarioIdInt,
                 gimnasio_id: gimnasioIdInt,
                 fecha_inicio: createMiembroDto.fecha_inicio,
                 fecha_fin: createMiembroDto.fecha_fin,
                 precio: createMiembroDto.precio,
                 estado_membresia_id: createMiembroDto.estado_membresia_id
              },
          });

          return {
            message: `El usuario con ID ${cliente_id} fue inscrito exitosamente en el gimnasio con ID ${gimnasio_id}`,
            miembro: nuevoMiembro,
        };
          
    } catch (error) {
      console.error("Hubo un error en la incripción: " + error.message);
      throw error;
    }
  }
  
  // Falta desarrollar
  async cancelarInscripcion() {
    
    return `This action returns all miembro`;
  }

  // Falta desarrollar
  async updateIncripcion(id: number) {
    
    return `This action returns a #${id} miembro`;
  }

  async getGimnasiosDeUsuario(id:number) {
    try {

      await this.validateUser(id);

      const gimnasios = await this.prisma.membresia.findMany({
        where: {
          cliente_id: Number(id),  // Filtrar por el ID del usuario
        },
        include: {
          gimnasio: true,  // Incluyo los detalles del gimnasio. Hace un JOIN a cada miembro encontrado.
        },
      });

      if (!gimnasios || gimnasios.length === 0) {
        throw new NotFoundException(`Este usuario no se encuentra inscripto en ningun Gimnasio`);
      }
      // map en JavaScript recorre cada elemento de un array y te permite transformar cada uno de esos elementos, creando un nuevo array basado en la transformación "gimnasio".
      // Basicamente, hago un array de gimnasios.
      return gimnasios.map((miembro) => miembro.gimnasio)
      
    } catch (error) {
      console.error("Hubo un error al recuperar los gimnasios:"+error.message);
      throw error;
    }
  }

  // Falta desarrollar
  async getUsuariosDeGimnasio(id: number) {
    
    return `This action removes a #${id} miembro`;
  }

  async getGimnasiosDisponibles(id: number) {
    try {
      // Verificar si el usuario existe
      await this.validateUser(id);
  
      // Obtener gimnasios a los que el usuario está inscrito
      const gimnasiosInscritos = await this.prisma.membresia.findMany({
        where: { cliente_id: Number(id) },
        select: { gimnasio_id: true }, // Solo necesito el id del gimnasio
      });
  
      // Obtener todos los gimnasios
      const todosLosGimnasios = await this.prisma.gimnasio.findMany();
  
      // Extraer los IDs de los gimnasios a los que está inscrito el usuario
      const idsInscritos = gimnasiosInscritos.map((miembro) => miembro.gimnasio_id);
  
      // Filtrar los gimnasios para obtener solo los que no están inscritos
      const gimnasiosDisponibles = todosLosGimnasios.filter(
        (gimnasio) => !idsInscritos.includes(gimnasio.id)
      );
  
      return gimnasiosDisponibles;
    } catch (error) {
      console.error("Hubo un error al recuperar los gimnasios disponibles: " + error.message);
      throw error;
    }
  }
}

