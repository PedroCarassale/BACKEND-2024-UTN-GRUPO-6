import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //Es un pipe que viene por defecto en NestJS para aplicar validaciones a los datos que llegan en las solicitudes. Cuando se usa @UsePipes(new ValidationPipe()), NestJS toma el DTO que defines en el controlador y valida los datos entrantes contra las reglas especificadas en el DTO mediante class-validator.
  app.useGlobalPipes(new ValidationPipe()) // Declarandolo aqui me evito estar repitiendo siempre la misma linea de codigo y me aseguro que todas las rutas tengan validaciones, siempre y cuando tengan un DTO.
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
  app.enableCors();
}
bootstrap();
