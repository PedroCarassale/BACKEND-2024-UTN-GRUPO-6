import { Injectable } from '@nestjs/common';
import { CreateEjercicioRutinaDto } from './dto/create-ejercicio_rutina.dto';
import { UpdateEjercicioRutinaDto } from './dto/update-ejercicio_rutina.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class EjercicioRutinaService {

  constructor(private prisma:PrismaService){
    
  }

  async create(createEjercicioRutinaDto: CreateEjercicioRutinaDto) {
    try {
      const newEjercicioRutina= await this.prisma.ejerciciorutina.create({data:createEjercicioRutinaDto,});
    return newEjercicioRutina;
    } catch (error) {
      console.error("Hubo un error en la creacion de ejercicicorutina: " + error.message);
      throw error;
    }
  }

  findAll() {
    return `This action returns all ejercicioRutina`;
  }

  update(id: number, updateEjercicioRutinaDto: UpdateEjercicioRutinaDto) {
    return `This action updates a #${id} ejercicioRutina`;
  }

  remove(id: number) {
    return `This action removes a #${id} ejercicioRutina`;
  }
}
