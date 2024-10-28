import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateEjercicioRutinaDto {
  @IsNotEmpty()
  @IsNumber()
  ejercicio_id: number;

  @IsOptional() // Esto hace que no sea obligatorio
  @IsNumber()
  rutina_id?: number;

  @IsNumber()
  descanso_entre_series?: number;

  @IsString()
  intensidad?: string; // Asegúrate de que esto sea un string

  @IsOptional() // Esto hace que no sea obligatorio
  @IsString()
  series_x_repeticiones?: string; // Asegúrate de que sea una cadena
}
