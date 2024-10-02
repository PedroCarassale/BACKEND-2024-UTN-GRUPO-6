// Data Transfer Object (DTO): Es una clase que define la estructura de los datos que deben ser enviados o recibidos a través de una solicitud HTTP
// Por lo general los DTO se usan con class-validator para definir las reglas de validación.
import {IsDecimal, IsNumber, IsString, MinLength, minLength} from "class-validator" // class-validator es una biblioteca que permite agregar validaciones a las propiedades de las clases (en este caso, DTOs) utilizando decoradores. 
// IMPORTANTE: Esto aqui se esta definiendo el valor, pero nadie ejecuta la validacion.
// La verdadera validacion se hace en el controller en el metodo create mediante el uso de el decorador @UsePipe+validationpipe()

export class createGimnasioDto {
    @IsString()
    @MinLength(1)
    nombre : string
    @IsString()
    @MinLength(1)
    direccion : string
    @IsString()
    @MinLength(1)
    ciudad : string
    @IsString()
    @MinLength(1)
    telefono: string
    @IsNumber()
    precio_membresia :number

}