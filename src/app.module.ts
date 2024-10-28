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
import { EjercicioModule } from './ejercicio/ejercicio.module';
import { RutinaModule } from './rutina/rutina.module';
import { EjercicioRutinaModule } from './ejercicio_rutina/ejercicio_rutina.module';
import { RutinaService } from './rutina/rutina.service';
import { EjercicioRutinaService } from './ejercicio_rutina/ejercicio_rutina.service';
import { RutinaController } from './rutina/rutina.controller';
import { EjercicioRutinaController } from './ejercicio_rutina/ejercicio_rutina.controller';


@Module({
  imports: [GimnasioModule,UsuarioModule, MiembroModule, EjercicioModule, RutinaModule, EjercicioRutinaModule],
  controllers: [GimnasioController, UsuarioController, MiembroController, RutinaController, EjercicioRutinaController],
  providers: [GimnasioService, UsuarioService, MiembroService,PrismaService, RutinaService, EjercicioRutinaService],
  
})
export class AppModule {}
