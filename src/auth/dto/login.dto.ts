import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class LoginDto {

    @IsEmail({}, { message: 'El email debe ser válido.' })
    correo: string;

    @IsString()
    @IsNotEmpty()
    @Length(6, 20, { message: 'La clave debe tener entre 6 y 20 caracteres.' })
    clave: string;
}