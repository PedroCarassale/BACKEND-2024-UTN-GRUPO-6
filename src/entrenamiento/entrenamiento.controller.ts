import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EntrenamientoService } from './entrenamiento.service';
import { CreateEntrenamientoDto } from './dto/create-entrenamiento.dto';
import { UpdateEntrenamientoDto } from './dto/update-entrenamiento.dto';

@Controller('entrenamiento')
export class EntrenamientoController {
  constructor(private readonly entrenamientoService: EntrenamientoService) {}

  @Post()
  async create(@Body() createEntrenamientoDto: CreateEntrenamientoDto) {
    return await this.entrenamientoService.create(createEntrenamientoDto);
  }


  @Get(':usuario_id/:fecha')
  async findOne(@Param('usuario_id') usuario_id: string, @Param('fecha') fecha:string) {
    return await this.entrenamientoService.findOne(+usuario_id, new Date(fecha));
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateEntrenamientoDto: UpdateEntrenamientoDto) {
    return await this.entrenamientoService.update(+id, updateEntrenamientoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.entrenamientoService.remove(+id);
  }

  @Get(':id')
  async findRutinas(@Param('id') id: string) {
    return await this.entrenamientoService.findRutinas(+id);
  }
}
