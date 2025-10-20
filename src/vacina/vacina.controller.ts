import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { VacinaService } from './vacina.service';
import { VacinaDto } from './dto/vacina.dto';
import { Vacina } from './entity/vacina.entity';

@Controller('vacina')
export class VacinaController {
  constructor(private readonly vacinaService: VacinaService) {}

  @Post()
  create(@Body() VacinaData: VacinaDto) {
    return this.vacinaService.create(VacinaData);
  }

  @Get()
  findAll(): Promise<Vacina[]> {
    return this.vacinaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Vacina> {
    return this.vacinaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateDto: VacinaDto): Promise<Vacina> {
    return this.vacinaService.update(id, updateDto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: number): Promise<void> {
    return this.vacinaService.remove(id);
  }
}
