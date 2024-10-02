import {Injectable} from "@nestjs/common" // Es un decordador de propiedad.
import { createGimnasioDto } from "./dto/create-gimnasio.dto";
import { PrismaService } from "src/prisma.service";
// Injectable se utiliza principalmente para declarar una clase como un proveedor, es decir, puede ser injectado en otros componentes de la app.
@Injectable({}) // Quiere decir que puede ser injectada en otro lado por ejemplo en GimnasioController.
export class GimnasioService {
    constructor(private prisma: PrismaService){
        // Inyecto una instancia de la clase PrismaService, para interactuar con la BD y poder realizar operaciones (CRUD, transacciones, consultas complejas, etc.) dentro de la clase GimnasioService.
    }
      
    getAllGimnasios() {
        return this.prisma.gimnasio.findMany();
    }  

    getGimnasioById(id){
        return("El id pasado es:"+id);
    }

    createGimnasio(gimnasio:createGimnasioDto){
    
        return("Gimnasio agregado a la BD: "+gimnasio.nombre);
    }

}