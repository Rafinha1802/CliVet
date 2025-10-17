import { Body, Controller, Get, Post, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { VeterinarioService } from './veterinario.service';
import { VeterinarioDto } from './dto/veterinario.dto';
import { Veterinario } from './entities/veterinario.entity';

@Controller('veterinario')
export class VeterinarioController {
  constructor(private readonly veterinarioService: VeterinarioService) {}

  @Post()
  create(@Body() veterinarioData: VeterinarioDto) {
    return this.veterinarioService.create(veterinarioData);
  }

  @Get()
  findAll(): Promise<Veterinario[]> {
    return this.veterinarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id_veterinario: number): Promise<Veterinario>{
    return this.veterinarioService.findOne(id_veterinario);
  }

  @Patch(':id')
  update(@Param('id') id_veterinario: number, @Body() updateDto: VeterinarioDto): Promise<Veterinario>{
    return this.veterinarioService.update(id_veterinario, updateDto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id_veterinario: number): Promise<void> {
    return this.veterinarioService.remove(id_veterinario);
   }
}
