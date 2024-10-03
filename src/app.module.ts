import { Module } from '@nestjs/common';
import { GimnasioModule } from './gimnasio/gimnasio.module';
import { GimnasioController } from './gimnasio/gimnasio.controller';
import { GimnasioService } from './gimnasio/gimnasio.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [GimnasioModule],
  controllers: [GimnasioController],
  providers: [GimnasioService, PrismaService],
})
export class AppModule {}
