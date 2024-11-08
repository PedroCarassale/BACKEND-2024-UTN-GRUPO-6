import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Put, UsePipes, ValidationPipe} from "@nestjs/common"; // Son decoradores.
import { GimnasioService } from "./gimnasio.service"; // Injecto GimnasioService en el Controller para utilizar sus funciones.
import { createGimnasioDto } from "./dto/create-gimnasio.dto";
import { updateGimnasioDto } from "./dto/update-gimnasio.dto";

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
        // No es necesario manejar los errores en el controlador porque ya se manejan en el servicioGimnasio.
    }

    // Devuelve un Gimnasio con un id en particular.
    @Get("/:id")
    async getGimnasioById(@Param("id") id) {
        return await this.gimnasioService.getGimnasioById(id);
    }

    // Crea un Gimnasio nuevo.
    @Post()
    // @HttpCode(404) ----> Con este Decorador puedo enviar un codigo de estado.
    // Recuerdo que aqui entra en accion el validation pipe que declaramos en el main.ts para validar el objeto recibido.
    async createGimnasio(@Body() gimnasio: createGimnasioDto){    
        // El decorador @Body nos permite extraer los datos enviados desde la peticion POST.
        // @Query es para obtener algun otro parametro por url. Ejemplo gimnasios/?ciudad=LaPlata 
        return this.gimnasioService.createGimnasio(gimnasio); // Envio el objeto gimnasio a gimnasioService para agregarlo a la BD.
    }

    // Actualiza todas las propiedades de un Gimnasio.
    @Put("/:id") // Put actualiza un gimnasio por completo.
    async updateGimnasio(@Param("id") id, @Body() gimnasio: updateGimnasioDto){
        const isPatch: boolean = false; // Esto lo hago para controlar la actualizacion completa y evitar crear un update-partial-gimnasio.dto
        return this.gimnasioService.updateGimnasio(id,gimnasio,isPatch);
    }

    // Actualiza parcialmente un Gimnasio.
    @Patch("/:id") // Patch actualiza un gimnasio parcialmente. Ejemplo: solo el nombre.
    async updatePartialGimnasio(@Param("id") id, @Body() gimnasio: updateGimnasioDto){
        const isPatch: boolean = true; // Esto lo hago para controlar la actualizacion parcial y evitar crear un update-partial-gimnasio.dto
        return this.gimnasioService.updateGimnasio(id,gimnasio,isPatch);
    }

    // Elimina un Gimnasio.
    @Delete("/:id")
    async deleteGimnasio(@Param("id") id){
        return this.gimnasioService.deleteGimnasio(id);
    }

        // Devuelve un todas las rutinas de un gimnasio.
        @Get(':id/rutinas')
        async getRutinasDeGimnasioById(@Param("id") id) {
            return await this.gimnasioService.getRutinasDeGimnasioById(id);
        }

}