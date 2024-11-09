import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import {Request} from "express";
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from '../constants/jwt.constant';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor (private readonly jwtService: JwtService) {}
  // El metodo canActivate se ejecuta siempre antes de cualquier solicitud hacia un endopoint o ruta.
  // Basicamente lo que hace es verificar si el token es valido antes de dejarlo pasar.
  // Trabajamos con una promise que devuelve un valor booleano. 
  async canActivate(context: ExecutionContext,): Promise<boolean> {
    // El objeto context proporciona información
    // sobre la solicitud entrante y el entorno de ejecución.
    // Este objeto request incluye todos los datos de la solicitud, como encabezados, cuerpo, URL, y más.
    const request = context.switchToHttp().getRequest(); // Esta línea convierte el contexto (context) de la ejecución del guard a un contexto HTTP, accede a la solicitud HTTP completa, y getRequest() obtiene el objeto request de esa solicitud.
    // Acá puedes implementar tu lógica de autenticación o autorización.
    // Por ejemplo, verificar si el usuario está autenticado, si tiene los roles adecuados, etc.

    // Si la validación es exitosa, devuelve true, permitiendo el acceso.
    // Si la validación falla, devuelve false, denegando el acceso.

    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException();
    }

    try {
      // Verifica que el token sea igual al secreto que hicimos en constant
      const payload = await this.jwtService.verifyAsync(
        token,
         {
          secret: jwtConstants.secret 
         }
        );
        request['user'] = payload; // le inyecto al request una nueva propiedad llamada user que tiene el payload que a su ve tiene el correo (/authservice en el metodo login)
      
    } catch (error) {
      throw new UnauthorizedException();
    }



    return true;
  }

  // Este metodo extrae el token del Header
  private extractTokenFromHeader(request: Request) {
    const [type, token] = request.headers.authorization?.split(" ") ?? [];
    return type === "Bearer" ? token : undefined;
  }
}
