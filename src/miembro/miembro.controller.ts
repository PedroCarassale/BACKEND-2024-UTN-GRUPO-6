import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MiembroService } from './miembro.service';
import { CreateMiembroDto } from './dto/create-miembro.dto';
import { UpdateMiembroDto } from './dto/update-miembro.dto';

@Controller("/miembro")
export class MiembroController {
  constructor(private readonly miembroService: MiembroService) {}

  @Post()
  inscribirEnGimnasio(@Body() createMiembroDto: CreateMiembroDto) {
    return this.miembroService.inscribirEnGimnasio(createMiembroDto);
  }

  @Delete() // Falta desarrollar
  cancelarInscripcion() {
    return this.miembroService.cancelarInscripcion();
  }

  @Get(':id') // Falta desarrollar
  updateIncripcion(@Param('id') id: string) {
    return this.miembroService.updateIncripcion(+id);
  }

  @Get('/gimnasios/:id')
  getGimnasiosDeUsuario(@Param('id') id: number) {
    return this.miembroService.getGimnasiosDeUsuario(id);
  }

  @Get('/gimnasios/disponibles/:id')
  getGimnasiosDisponibles(@Param('id') id: number) {
    return this.miembroService.getGimnasiosDisponibles(id);
  }

  @Get(':id') // Falta desarrollar
  getUsuariosDeGimnasio(@Param('id') id: string) {
    return this.miembroService.getUsuariosDeGimnasio(+id);
  }
}
