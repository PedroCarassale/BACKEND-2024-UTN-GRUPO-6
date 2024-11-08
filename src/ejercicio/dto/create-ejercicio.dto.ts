import { IsNotEmpty, IsString } from "class-validator";

export class CreateEjercicioDto {

@IsString()
@IsNotEmpty()
nombre : string;

@IsString()
descripcion? : string;


@IsString()
imagen_url? : string;

}

