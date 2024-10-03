import {IsDecimal, IsNumber, IsString, IsNotEmpty, IsOptional} from "class-validator"
export class updateGimnasioDto {
    
    @IsString()
    @IsOptional()
    nombre?: string // El ? hace que la actualizacion de la propiedad sea OPCIONAL. 
    @IsString()
    @IsOptional()
    direccion?: string
    @IsString()
    @IsOptional()
    ciudad? : string
    @IsString()
    @IsOptional()
    telefono?: string
    @IsNumber()
    @IsOptional()
    precio_membresia? :number
    @IsString()
    @IsOptional()
    imagen_url? : string


}