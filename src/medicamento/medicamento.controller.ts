import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { MedicamentoService } from './medicamento.service';
import { MedicamentoDto } from './dto/medicamento.dto';
import { Medicamento } from './entity/medicamento.entity';

@Controller('medicamento')
export class MedicamentoController {
  constructor(private readonly medicamentoService: MedicamentoService) {}

  @Post()
    create(@Body() medicamentoData: MedicamentoDto) {
      return this.medicamentoService.create(medicamentoData);
    }
  
    @Get()
    findAll(): Promise<Medicamento[]> {
      return this.medicamentoService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: number) {
      return this.medicamentoService.findOne(id);
    }
  
    @Patch(':id')
    update(@Param('id') id: number, @Body() updateDto: MedicamentoDto): Promise<Medicamento> {
      return this.medicamentoService.update(id, updateDto);
    }
  
    @Delete(':id')
    @HttpCode(204)
    remove(@Param('id') id: number): Promise<void> {
      return this.medicamentoService.remove(id);
    }
}
