import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsuarioService {
  
  constructor(private prisma: PrismaService) {
  }
  
  async validateEmail(correo: string): Promise<boolean> {
    try {
      const user = await this.prisma.usuario.findUnique({
        where: { correo },
      });
      
      // Devuelve true si no existe el mail en la BD, pero si existe devuelve false
      return !user;
    } catch (error) {
      console.error('Error:', error.message);
      throw new Error('Error al validar el email');
    }
  }

  async validateDni(dni: string): Promise<boolean> {
    try {
      const user = await this.prisma.usuario.findUnique({
        where: { dni },
      });
      
      // Devuelve true si no existe el usuario con ese DNI, de lo contrario false
      return !user;
    } catch (error) {
      console.error('Error al validar el DNI:', error.message);
      throw new Error('Error al validar el DNI');
    }
  }

  async createUsuario(createUsuarioDto: CreateUsuarioDto) {
    try {
      // Validar si el email ya existe
      const isEmailValid = await this.validateEmail(createUsuarioDto.correo);
      const isDniValid = await this.validateDni(createUsuarioDto.dni);
  
      if (!isEmailValid) {
        throw new ConflictException('El email ingresado ya se encuentra registrado.');
      }
  
      if (!isDniValid) {
        throw new ConflictException('El DNI ingresado ya se encuentra registrado.');
      }
  
      // Hashear la clave antes de crear el usuario
      const hashedPassword = await bcrypt.hash(createUsuarioDto.clave, 10);
  
      // Crear el nuevo usuario con la clave hasheada
      const nuevoUsuario = await this.prisma.usuario.create({
        data: {
          ...createUsuarioDto,
          clave: hashedPassword,
        },
      });
  
      return nuevoUsuario;
  
    } catch (error) {
      console.error("Error al crear el usuario:", error.message);
      throw error;
    }
  }
  
  async getAllUsuarios() {
    try {
      const usuarios = await this.prisma.usuario.findMany();
      if (!usuarios) {
        return ("No hay usuarios registrados.")
      } else {
        return usuarios;
      }
    } catch (error) {
      console.error("Error al recuperar los us el usuario", error.message);
      throw error;
    }
  }

  async UsuarioByDni(dni: string) {
    try {
      if (!dni) {
        throw new BadRequestException('El dni proporcionado no es válido'); // Valido el id.
      }
      const usuario = await this.prisma.usuario.findUnique({where: {dni: dni,},});
      if (!usuario) {return "El usuario no se encuentra registrado"}
      else {return usuario;}
    } catch (error) {
      console.error("Error al recuperar el usuario", error.message);
      throw error;
    }
  }

  async updateUsuario(dni: string, updateUsuarioDto: UpdateUsuarioDto, isPatch: boolean) {
    try {
      // Buscar el usuario existente por DNI
      const usuarioExistente = await this.prisma.usuario.findUnique({
        where: { dni: dni },
      });
  
      if (!usuarioExistente) {
        throw new NotFoundException('El usuario que desea modificar no se encuentra.');
      }
  
      // Validar el email solo si está presente en el DTO y es diferente del actual
      if (updateUsuarioDto.correo && updateUsuarioDto.correo !== usuarioExistente.correo) {
        const isEmailValid = await this.validateEmail(updateUsuarioDto.correo);
        if (!isEmailValid) {
          throw new ConflictException('El email ingresado ya se encuentra registrado.');
        }
      }
  
      // Validar el DNI solo si está presente en el DTO y es diferente del actual
      if (updateUsuarioDto.dni && updateUsuarioDto.dni !== usuarioExistente.dni) {
        const isDniValid = await this.validateDni(updateUsuarioDto.dni);
        if (!isDniValid) {
          throw new ConflictException('El DNI ingresado ya se encuentra registrado.');
        }
      }
  
      // Si es una actualización completa (PUT), asegurarse de que todos los campos estén presentes
      if (!isPatch) {
        const { nombre, dni, correo, clave } = updateUsuarioDto;
        if (!nombre || !dni || !correo || !clave) {
          throw new BadRequestException('Los campos nombre, dni, email y clave son obligatorios.');
        }
      }
  
      // Actualizar solo los campos presentes en el DTO (para PUT o PATCH)
      const datosActualizados: any = {};
  
      if (updateUsuarioDto.nombre) datosActualizados.nombre = updateUsuarioDto.nombre;
      if (updateUsuarioDto.dni) datosActualizados.dni = updateUsuarioDto.dni;
      if (updateUsuarioDto.correo) datosActualizados.email = updateUsuarioDto.correo;
      if (updateUsuarioDto.clave) datosActualizados.clave = await bcrypt.hash(updateUsuarioDto.clave, 10);  // Hashear la clave si se proporciona
  
      // Realizar la actualización
      const usuarioModificado = await this.prisma.usuario.update({
        where: { dni: dni },  // Mantener el usuario identificado por el DNI original
        data: datosActualizados,
      });
  
      return usuarioModificado;
  
    } catch (error) {
      console.error('Error al actualizar el usuario:', error.message);
      throw error;
    }
  }

  async deleteUsuario(dni: string) {
    try {

      if (!dni) {
        throw new BadRequestException('El dni proporcionado no es válido'); // Valido el id.
      }
      const usuario = await this.prisma.usuario.findUnique({where: {dni: dni,},});
      if (!usuario) {return "El usuario no se encuentra registrado"}
      else {
        await this.prisma.usuario.delete({where: {dni: dni,},});
        return { message: 'Usuario eliminado con éxito' };
      }
      
    } catch (error) {
      console.error("Error al eliminar el usuario", error.message);
      throw error;
    }
  }
}
