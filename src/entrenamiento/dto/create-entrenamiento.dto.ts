import { IsDate, IsDateString, IsInt, IsNotEmpty, IsString, Matches } from "class-validator";

export class CreateEntrenamientoDto {

  @IsString()
  @Matches(/^\d{2}\/\d{2}\/\d{4}$/, { message: 'La fecha debe tener el formato dd/MM/yyyy' })
  fecha: string; // Recibimos la fecha como string

    @IsInt()
    @IsNotEmpty()
    usuario_id:number;
    @IsInt()
    @IsNotEmpty()
    rutina_id:number;
}
