import { Module } from '@nestjs/common';
import { EjercicioService } from './ejercicio.service';
import { EjercicioController } from './ejercicio.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [EjercicioController],
  providers: [EjercicioService, PrismaService],
  exports: [EjercicioService], 
})
export class EjercicioModule {}
