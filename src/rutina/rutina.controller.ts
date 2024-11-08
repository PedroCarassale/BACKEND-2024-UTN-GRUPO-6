import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RutinaService } from './rutina.service';
import { CreateRutinaDto } from './dto/create-rutina.dto';
import { UpdateRutinaDto } from './dto/update-rutina.dto';

@Controller('rutinas')
export class RutinaController {
  constructor(private readonly rutinaService: RutinaService) {}

  @Post()
  async create(@Body() createRutinaDto: CreateRutinaDto) {
    return await this.rutinaService.create(createRutinaDto);
  }

  @Get()
  async findAll() {
    return await this.rutinaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.rutinaService.findOne(+id);
  }

  @Get(':id/ejercicios')
  async buscarEjerciciosPorRutina(@Param('id') id: string) {
    return await this.rutinaService.buscarEjerciciosPorRutina(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRutinaDto: UpdateRutinaDto) {
    return this.rutinaService.update(+id, updateRutinaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rutinaService.remove(+id);
  }
}
