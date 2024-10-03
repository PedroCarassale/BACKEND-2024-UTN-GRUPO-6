import { Module } from '@nestjs/common'; 
// Los decoradores sirven para aplicar a entidades (en este caso la clase "GimnasioModule") metadatos o alterar su comportamiento de alguna manera.
// Ademas de decoradores de Clase, tambien existen de metodos (@Get), parametros (@Query) y propiedad (@Inject).
@Module({}) // --> Este es un decorador de clase e indica que la misma ahora pertence a Nestjs y permite agrupar componentes relacionados como controladores, servicios.
export class GimnasioModule {
    
}
