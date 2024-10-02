import {IsDecimal, IsNumber, IsString, MinLength, minLength} from "class-validator"
export class updateGimnasioDto {
    @IsString()
    @MinLength(1)
    nombre? : string // El ? hace que la actualizacion de la propiedad sea OPCIONAL.  
    @IsString()
    @MinLength(1)
    direccion? : string
    @IsString()
    @MinLength(1)
    ciudad? : string
    @IsString()
    @MinLength(1)
    telefono? : string
    @IsNumber()
    precio_membresia? :number

}