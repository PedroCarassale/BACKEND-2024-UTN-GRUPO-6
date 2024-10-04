import { IsString, IsNotEmpty, Length, Matches, IsEmail } from "class-validator";

export class CreateUsuarioDto {

    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsNotEmpty()
    @Length(8, 8, { message: 'El DNI debe tener exactamente 8 dígitos.' })
    @Matches(/^[0-9]{8}$/, { message: 'El DNI debe contener solo números.' })
    dni: string;

    @IsEmail({}, { message: 'El email debe ser válido.' })
    email: string;

    @IsString()
    @IsNotEmpty()
    @Length(6, 20, { message: 'La clave debe tener entre 6 y 20 caracteres.' })
    clave: string;
}
