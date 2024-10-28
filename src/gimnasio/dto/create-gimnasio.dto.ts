// Data Transfer Object (DTO): Es una clase que define la estructura de los datos que deben ser enviados o recibidos a través de una solicitud HTTP
// Por lo general los DTO se usan con class-validator para definir las reglas de validación.
import {IsDecimal, isNotEmpty, IsNumber, IsString, IsOptional,IsNotEmpty} from "class-validator" // class-validator es una biblioteca que permite agregar validaciones a las propiedades de las clases (en este caso, DTOs) utilizando decoradores. 
// IMPORTANTE: Esto aqui se esta definiendo el valor, pero nadie ejecuta la validacion.
// La verdadera validacion se hace en el controller en el metodo create mediante el uso de el decorador @UsePipe+validationpipe()

export class createGimnasioDto {
    @IsString()
    @IsNotEmpty()
    nombre : string
    @IsString()
    @IsNotEmpty()
    direccion : string
    @IsNotEmpty()
    ciudad_id : number
    @IsString()
    @IsOptional()
    telefono: string
    @IsString()
    @IsOptional()
    imagen_url : string
    @IsNotEmpty()
    id_due_o : number
    @IsString()
    @IsOptional()
    descripcion : string


}