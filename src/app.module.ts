import { Module } from '@nestjs/common';
import { GimnasioModule } from './gimnasio/gimnasio.module';
import { GimnasioController } from './gimnasio/gimnasio.controller';
import { GimnasioService } from './gimnasio/gimnasio.service';

@Module({
  imports: [GimnasioModule],
  controllers: [GimnasioController],
  providers: [GimnasioService],
})
export class AppModule {}
