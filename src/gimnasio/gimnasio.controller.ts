import {Controller, Get, Param} from "@nestjs/common";
import { GimnasioService } from "./gimnasio.service"; // Injecto GimnasioService en el Controller para utilizar sus funciones.

@Controller({})
export class GimnasioController {
    gimnasioService:GimnasioService; // Declaro la variable en Controller.
    constructor(gimnasioService:GimnasioService){
        this.gimnasioService=gimnasioService; // Igualo mi variable local con la recibida por parametro.
    }

    @Get("/gimnasios")
    async getAll(){
        const result = await this.gimnasioService.getAll();
        return result;
    }

    @Get("/gimnasio:id")
    async getById(@Param("id") id) {
        const result = await this.gimnasioService.getById(id);
        return (result);
    }
}