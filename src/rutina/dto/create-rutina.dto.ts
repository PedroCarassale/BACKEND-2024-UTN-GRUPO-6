import { Type } from "class-transformer";
import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";
import { CreateEjercicioRutinaDto } from "src/ejercicio_rutina/dto/create-ejercicio_rutina.dto";

export class CreateRutinaDto {

@IsString()
@IsNotEmpty()
nombre : string;

@IsString()
imagen_url? : string;

@IsNumber()
descanso_entre_ejercicios? : number;

@IsNumber()
@IsOptional()
gimnasio_id?: number;

@IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateEjercicioRutinaDto)
  ejercicios: CreateEjercicioRutinaDto[]; // Lista de ejercicios con detalles específicos para cada uno

}
