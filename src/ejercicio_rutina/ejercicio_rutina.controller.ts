import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EjercicioRutinaService } from './ejercicio_rutina.service';
import { CreateEjercicioRutinaDto } from './dto/create-ejercicio_rutina.dto';
import { UpdateEjercicioRutinaDto } from './dto/update-ejercicio_rutina.dto';

@Controller('ejercicio-rutina')
export class EjercicioRutinaController {
  constructor(private readonly ejercicioRutinaService: EjercicioRutinaService) {}

  @Post()
  async create(@Body() createEjercicioRutinaDto: CreateEjercicioRutinaDto) {
    return await this.ejercicioRutinaService.create(createEjercicioRutinaDto);
  }

  @Get()
  findAll() {
    return this.ejercicioRutinaService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEjercicioRutinaDto: UpdateEjercicioRutinaDto) {
    return this.ejercicioRutinaService.update(+id, updateEjercicioRutinaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ejercicioRutinaService.remove(+id);
  }
}
