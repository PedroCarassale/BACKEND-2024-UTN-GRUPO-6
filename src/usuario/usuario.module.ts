import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { PrismaService } from 'src/prisma.service'; // Asegúrate de que esto esté incluido si PrismaService es necesario

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioService, PrismaService], // Agrega PrismaService aquí si es necesario
  exports: [UsuarioService], // Asegúrate de exportar UsuarioService
})
export class UsuarioModule {}
