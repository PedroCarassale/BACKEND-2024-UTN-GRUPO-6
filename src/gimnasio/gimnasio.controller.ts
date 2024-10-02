import {Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Put, UsePipes, ValidationPipe} from "@nestjs/common"; // Son decoradores.
import { GimnasioService } from "./gimnasio.service"; // Injecto GimnasioService en el Controller para utilizar sus funciones.
import { createGimnasioDto } from "./dto/create-gimnasio.dto";

@Controller("/gimnasios") // Poniendo "/gimnasios" evito repetir en cada method la misma direccion
export class GimnasioController {
    
    constructor(private readonly gimnasioService: GimnasioService){
        // "private" declara la variable gimnasioService automaticamente dentro de la clase y le asigna directamente el valor recibido en el constructor.
        // Esto evita tener que declarar una variable fuera del constructor y luego realizar una asignacion explicita con el valor recibido por parametro.
    }

    // Devuelve todos los Gimnasios.
    @Get()
    async getAllGimnasios(){
        
        return await this.gimnasioService.getAllGimnasios();
    }

    // Devuelve un Gimnasio con un id en particular.
    @Get("/:id")
    async getGimnasioById(@Param("id") id) {
        const result = await this.gimnasioService.getGimnasioById(id);
        return (result);
    }

    // Crea un Gimnasio nuevo.
    @Post()
    //@HttpCode(404) ----> Con este Decorador puedo enviar un codigo de estado.
    // Recuerdo que aqui entra en accion el validation pipe que declaramos en el main.ts para validar el objeto recibido.
    createGimnasio(@Body() gimnasio: createGimnasioDto){    
        // El decorador @Body nos permite extraer los datos enviados desde la peticion POST.
        // @Query es para obtener algun otro parametro por url. Ejemplo gimnasios/?ciudad=LaPlata 
        return this.gimnasioService.createGimnasio(gimnasio); // Envio el objeto gimnasio a gimnasioService para agregarlo a la BD.
    }

    // Actualiza todas las propiedades de un Gimnasio.
    @Put() // Put actualiza un gimnasio por completo.
    updateGimnasio(){
        return ("Gimnasio actualizado con exito.");
    }

    // Actualiza solo el nombre de un Gimnasio
    @Patch() // Patch actualiza un gimnasio parcialmente. Ejemplo: nombre
    updateNombreGimnasio(){
        return ("El nombre del gimnasio fue actualizado con exito.");
    }

    // Elimina un Gimnasio.
    @Delete()
    deleteGimnasio(){
        return ("Gimnasio eliminado con exito.");
    }

}