import { Body, Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './guard/auth.guard';

@Controller('auth')


export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @Post("register")
    register (@Body() registerDto: RegisterDto) { // Acá estoy diciendo como se tiene que comportar el body o validando el body

        return this.authService.register(registerDto);
    }
    
    @Post("login")
    login (@Body() loginDto:LoginDto) {
        return this.authService.login(loginDto);
    }

    @Get("pruebatoken")
    @UseGuards(AuthGuard) // Este llama al metodo y verifica si el token es valido
   
    pruebaDeToken ( @Request () req) {
        return req.user;
    }
}
