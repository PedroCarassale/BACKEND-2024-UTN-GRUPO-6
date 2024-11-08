import {IsDecimal, IsNumber, IsString, IsNotEmpty, IsOptional} from "class-validator"
export class updateGimnasioDto {

    @IsString()
    @IsNotEmpty()
    nombre : string
    @IsString()
    @IsNotEmpty()
    direccion : string
    @IsNotEmpty()
    ciudad_id : number
    @IsString()
    @IsOptional()
    telefono: string
    @IsString()
    @IsOptional()
    imagen_url : string
    @IsNotEmpty()
    id_due_o : number
    @IsString()
    @IsOptional()
    descripcion : string


}