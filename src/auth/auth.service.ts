import { BadRequestException, Injectable } from '@nestjs/common';
import { UsuarioService } from 'src/usuario/usuario.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    // AuthService se tiene que concetar con UsuarioService, por eso lo injecto en el constructor

    constructor(
        private readonly usuarioService: UsuarioService,
        private readonly jwtService: JwtService
    ){}
    
    async register (registerDto:RegisterDto) {
        
        return await this.usuarioService.createUsuario(registerDto);
    }
    
    
    async login ({correo, clave}: LoginDto) {
        const usuario = await this.usuarioService.buscarPorCorreo(correo); // Si lo encuentra retorna la instancia completa

        if(!usuario) {
            throw new BadRequestException("Email invalido");
        }

        const isClaveValid = await bcrypt.compare(clave, usuario.clave);

        if(!isClaveValid) {
            throw new BadRequestException("Clave invalida");
        }
        const payload = {usuario_id: usuario.id}; // payload es un objeto que contiene la información que quieres almacenar en el token.
        // Piensa en signAsync como el proceso de "empaquetar" la información y "sellarla" con la clave secreta para hacerla segura.
        const token = await this.jwtService.signAsync(payload); // Acá utilizo el método signAsync de jwtService. Este método toma el payload y lo convierte en un token JWT usando la clave secreta
        const usuario_id= usuario.id;

        return {token, usuario_id,};

    }
}
