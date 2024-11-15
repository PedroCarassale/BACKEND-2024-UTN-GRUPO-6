import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EntrenamientoService } from './entrenamiento.service';
import { CreateEntrenamientoDto } from './dto/create-entrenamiento.dto';
import { UpdateEntrenamientoDto } from './dto/update-entrenamiento.dto';

@Controller('entrenamiento')
export class EntrenamientoController {
  constructor(private readonly entrenamientoService: EntrenamientoService) {}

  @Post()
  async create(
    @Body() createEntrenamientoDto: { rutina_id: number; usuario_id: number; fecha: string },
  ) {
    // Convertir la fecha de "dd/MM/yyyy" a un objeto Date
    const [day, month, year] = createEntrenamientoDto.fecha.split('/').map(Number);
    const fechaConvertida = new Date(year, month - 1, day); // Meses en JavaScript son 0-indexed
  
    // Pasar los datos procesados al servicio
    return await this.entrenamientoService.create({
      rutina_id: createEntrenamientoDto.rutina_id,
      usuario_id: createEntrenamientoDto.usuario_id,
      fecha: fechaConvertida,
    });
  }


  @Get(':usuario_id/:fecha')
  async findOne(@Param('usuario_id') usuario_id: string, @Param('fecha') fecha:string) {
    return await this.entrenamientoService.findOne(+usuario_id, new Date(fecha));
  }

  @Get(':usuario_id/:month/:year')
async findEntrenamientosByMes(
  @Param('usuario_id') usuario_id: string,
  @Param('month') month: string,
  @Param('year') year: string,
) {
  return await this.entrenamientoService.findEntrenamientosByUsuarioYMes(
    +usuario_id, // Convertimos usuario_id a número
    +year,       // Convertimos el año a número
    +month       // Convertimos el mes a número
  );
}


@Patch(':id')
async update(
  @Param('id') id: string,
  @Body() updateEntrenamientoDto: { rutina_id?: number; usuario_id?: number; fecha?: string },
) {
  let fechaConvertida: Date | undefined;

  // Convertir la fecha si se proporciona
  if (updateEntrenamientoDto.fecha) {
    const [day, month, year] = updateEntrenamientoDto.fecha.split('/').map(Number);
    fechaConvertida = new Date(year, month - 1, day); // Meses en JavaScript son 0-indexed
  }

  // Pasar los datos procesados al servicio
  return await this.entrenamientoService.update(+id, {
    ...updateEntrenamientoDto,
    fecha: fechaConvertida, // Incluye la fecha convertida si se proporcionó
  });
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
