import { Module } from '@nestjs/common';
import { EntrenamientoService } from './entrenamiento.service';
import { EntrenamientoController } from './entrenamiento.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [EntrenamientoController],
  providers: [EntrenamientoService, PrismaService],
})
export class EntrenamientoModule {}
