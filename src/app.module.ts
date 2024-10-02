import { Module } from '@nestjs/common';
import { GimnasioModule } from './gimnasio/gimnasio.module';
import { GimnasioController } from './gimnasio/gimnasio.controller';

@Module({
  imports: [GimnasioModule],
  controllers: [GimnasioController],
  providers: [],
})
export class AppModule {}
