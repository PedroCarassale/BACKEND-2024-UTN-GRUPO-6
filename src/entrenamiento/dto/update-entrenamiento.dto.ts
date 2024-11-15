import { PartialType } from '@nestjs/mapped-types';
import { CreateEntrenamientoDto } from './create-entrenamiento.dto';
import { IsDateString, IsInt, IsNotEmpty } from 'class-validator';

export class UpdateEntrenamientoDto extends PartialType(CreateEntrenamientoDto) {

    @IsDateString()
    @IsNotEmpty()
    fecha: string;
  
      @IsInt()
      @IsNotEmpty()
      usuario_id:number;
      @IsInt()
      @IsNotEmpty()
      rutina_id:number;
}
