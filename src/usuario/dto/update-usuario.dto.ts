import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioDto } from './create-usuario.dto';
import { IsEmail, IsNotEmpty, IsString, Length, Matches } from 'class-validator';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {
    @IsString()
    @IsNotEmpty()
    nombre?: string;

    @IsNotEmpty()
    rol_id: number;  

    @IsString()
    @IsNotEmpty()
    apellido: string;

    @IsString()
    @IsNotEmpty()
    nombre_usuario: string;

    @IsString()
    @IsNotEmpty()
    @Length(8, 8, { message: 'El DNI debe tener exactamente 8 dígitos.' })
    @Matches(/^[0-9]{8}$/, { message: 'El DNI debe contener solo números.' })
    dni?: string;

    @IsEmail({}, { message: 'El email debe ser válido.' })
    correo?: string;

    @IsString()
    @IsNotEmpty()
    @Length(6, 20, { message: 'La clave debe tener entre 6 y 20 caracteres.' })
    clave?: string;
}
