import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { PacienteDto } from './dto/paciente.dto';
import { Paciente } from './entity/paciente.entity';

@Controller('paciente')
export class PacienteController {
  constructor(private readonly pacienteService: PacienteService) {}

  @Post()
  create(@Body() pacienteData: PacienteDto) {
    return this.pacienteService.create(pacienteData);
  }

  @Get()
  findAll(): Promise<Paciente[]> {
    return this.pacienteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.pacienteService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateDto: PacienteDto): Promise<Paciente> {
    return this.pacienteService.update(id, updateDto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: number): Promise<void> {
    return this.pacienteService.remove(id);
  }
}
