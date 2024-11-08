import { Controller, Get, Post, Body, Patch, Put,Param, Delete } from '@nestjs/common';
import { EjercicioService } from './ejercicio.service';
import { CreateEjercicioDto } from './dto/create-ejercicio.dto';
import { UpdateEjercicioDto } from './dto/update-ejercicio.dto';

@Controller('ejercicios')
export class EjercicioController {
  constructor(private readonly ejercicioService: EjercicioService) {}

  @Post()
  async create(@Body() createEjercicioDto: CreateEjercicioDto) {
    return await this.ejercicioService.create(createEjercicioDto);
  }

  @Get()
  async findAll() {
    return await this.ejercicioService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.ejercicioService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id, @Body() updateEjercicioDto: UpdateEjercicioDto) {
    const isPatch: boolean = false;
    return this.ejercicioService.update(+id, updateEjercicioDto,isPatch);
  }


  @Patch(':id')
  async updatePartial(@Param('id') id, @Body() updateEjercicioDto: UpdateEjercicioDto) {
    const isPatch: boolean = true;
    return this.ejercicioService.update(+id, updateEjercicioDto,isPatch);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ejercicioService.remove(+id);
  }
}
