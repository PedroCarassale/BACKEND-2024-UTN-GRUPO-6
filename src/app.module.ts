import { Module } from '@nestjs/common';
import { GimnasioModule } from './gimnasio/gimnasio.module';
import { GimnasioController } from './gimnasio/gimnasio.controller';
import { GimnasioService } from './gimnasio/gimnasio.service';
import { PrismaService } from './prisma.service';
import { UsuarioModule } from './usuario/usuario.module';
import { UsuarioController } from './usuario/usuario.controller';
import { UsuarioService } from './usuario/usuario.service';

@Module({
  imports: [GimnasioModule, UsuarioModule],
  controllers: [GimnasioController, UsuarioController],
  providers: [GimnasioService,UsuarioService, PrismaService],
})
export class AppModule {}
