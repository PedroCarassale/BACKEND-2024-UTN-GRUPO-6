import { Module } from '@nestjs/common';
import { EjercicioRutinaService } from './ejercicio_rutina.service';
import { EjercicioRutinaController } from './ejercicio_rutina.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [EjercicioRutinaController],
  providers: [EjercicioRutinaService, PrismaService],
})
export class EjercicioRutinaModule {}
