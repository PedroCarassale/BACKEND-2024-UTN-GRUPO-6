import { Decimal } from "@prisma/client/runtime/library";
import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateMiembroDto {
    @IsNotEmpty()
    cliente_id: number;  

    @IsNotEmpty()
    gimnasio_id: number;  

    @IsNotEmpty()
    fecha_inicio: Date; 
    
    @IsNotEmpty()
    fecha_fin: Date; 

    @IsNotEmpty()
    precio: Decimal;
    
    @IsNotEmpty()
    estado_membresia_id: number;
    
}
