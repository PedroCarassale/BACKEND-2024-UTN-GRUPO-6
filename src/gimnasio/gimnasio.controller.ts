import {Controller, Get} from "@nestjs/common";

@Controller({})
export class GimnasiosController {
    @Get("/gimnasios")
    getGimnasios() {
        return ("<h1>GimnasiosID</h1>");
    }
}