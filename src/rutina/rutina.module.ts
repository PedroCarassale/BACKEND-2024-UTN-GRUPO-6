import { Module } from '@nestjs/common';
import { RutinaService } from './rutina.service';
import { RutinaController } from './rutina.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [RutinaController],
  providers: [RutinaService, PrismaService],
})
export class RutinaModule {}
