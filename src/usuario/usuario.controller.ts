import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('/usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  async createUsuario(@Body() createUsuarioDto: CreateUsuarioDto) {
    return await this.usuarioService.createUsuario(createUsuarioDto);
  }

  @Get()
  async getAllUsuarios() {
    return await this.usuarioService.getAllUsuarios();
  }

  @Get(':dni')
  async getUsuarioByDni(@Param('dni') dni: string) {
    return await this.usuarioService.UsuarioByDni(dni);
  }

  @Put(':dni')
  async updateUsuario(@Param('dni') dni: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    const isPatch= false;
    return await this.usuarioService.updateUsuario(dni, updateUsuarioDto,isPatch);
  }

  @Patch(':dni')
  async updatePartialUsuario(@Param('dni') dni: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    const isPatch= true;
    return await this.usuarioService.updateUsuario(dni, updateUsuarioDto, isPatch);
  }

  @Delete(':dni')
  deleteUsuario(@Param('dni') dni: string) {
    return this.usuarioService.deleteUsuario(dni);
  }
}
