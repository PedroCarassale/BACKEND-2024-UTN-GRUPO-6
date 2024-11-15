import { IsDate, IsDateString, IsInt, IsNotEmpty } from "class-validator";

export class CreateEntrenamientoDto {

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
