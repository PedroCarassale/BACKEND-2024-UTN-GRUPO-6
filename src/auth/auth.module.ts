import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants/jwt.constant';

@Module({
  imports: [UsuarioModule, JwtModule.register({
    global: true, // Esto me dice que cualquier servicio puede usar en JWT.
    secret: jwtConstants.secret, // Esta es la palabra secreta para verificar que el token que se genero es correcto.
    signOptions: { expiresIn: '1d' }, // Tiempo de expiracion
  }),], // Porque estoy injectando el usuarioService
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
