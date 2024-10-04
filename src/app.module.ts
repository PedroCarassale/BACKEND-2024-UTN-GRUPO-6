import { Module } from '@nestjs/common';
import { GimnasioModule } from './gimnasio/gimnasio.module';
import { GimnasioController } from './gimnasio/gimnasio.controller';
import { GimnasioService } from './gimnasio/gimnasio.service';
import { PrismaService } from './prisma.service';
import { UsuarioModule } from './usuario/usuario.module';
import { UsuarioController } from './usuario/usuario.controller';
import { UsuarioService } from './usuario/usuario.service';
import { MiembroModule } from './miembro/miembro.module';
import { MiembroService } from './miembro/miembro.service';
import { MiembroController } from './miembro/miembro.controller';

@Module({
  imports: [GimnasioModule, UsuarioModule, MiembroModule],
  controllers: [GimnasioController, UsuarioController, MiembroController],
  providers: [GimnasioService, UsuarioService, MiembroService,PrismaService],
})
export class AppModule {}
