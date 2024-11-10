import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './http-exception.filter';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:5173', // Especifica el origen exacto del frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Si necesitas enviar cookies o autenticación
  });
  //Es un pipe que viene por defecto en NestJS para aplicar validaciones a los datos que llegan en las solicitudes. Cuando se usa @UsePipes(new ValidationPipe()), NestJS toma el DTO que defines en el controlador y valida los datos entrantes contra las reglas especificadas en el DTO mediante class-validator.
  app.useGlobalPipes(new ValidationPipe()); // Declarandolo aqui me evito estar repitiendo siempre la misma linea de codigo y me aseguro que todas las rutas tengan validaciones, siempre y cuando tengan un DTO.
  app.useGlobalFilters(new HttpExceptionFilter());

  // Aumentar el límite de tamaño de carga útil
  app.use(bodyParser.json({ limit: '10mb' }));
  app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

  await app.listen(3000);
}
bootstrap();
