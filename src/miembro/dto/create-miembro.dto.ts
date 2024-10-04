import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateMiembroDto {
    @IsNotEmpty()
    usuario_id: number;  

    @IsNotEmpty()
    gimnasio_id: number;  

    @IsOptional()  // Este campo es opcional, ya que tiene un valor por defecto
    fecha_membresia?: Date;  // Si no se proporciona, se asignará la fecha actual por defecto
}
