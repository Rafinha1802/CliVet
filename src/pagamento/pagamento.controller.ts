import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { PagamentoService } from './pagamento.service';
import { PagamentoDto } from './dto/pagamento.dto';
import { Pagamento } from './entity/pagamento.entity';

@Controller('pagamento')
export class PagamentoController {
  constructor(private readonly pagamentoService: PagamentoService) {}

  @Post()
  create(@Body() pagamentoData: PagamentoDto) {
    return this.pagamentoService.create(pagamentoData);
  }

  @Get()
  findAll(): Promise<Pagamento[]> {
    return this.pagamentoService.findAll();
  }
  
  @Get(':id')
  findOne(@Param('id') id: number): Promise<Pagamento>{
    return this.pagamentoService.findOne(id);
  }
  
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateDto: PagamentoDto): Promise<Pagamento>{
    return this.pagamentoService.update(id, updateDto);
  }
  
  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: number): Promise<void> {
    return this.pagamentoService.remove(id);
  }
}
