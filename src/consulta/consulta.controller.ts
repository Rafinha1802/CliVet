import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { ConsultaService } from './consulta.service';
import { ConsultaDto } from './dto/consulta.dto';
import { Consulta } from './entities/consulta.entity';

@Controller('consulta')
export class ConsultaController {
  constructor(private readonly consultaService: ConsultaService) {}

  @Post()
  create(@Body() consultaData: ConsultaDto) {
    return this.consultaService.create(consultaData);
  }

  @Get()
  findAll(): Promise<Consulta[]> {
    return this.consultaService.findAll();
  }

  @Get(':id_consulta')
  findOne(@Param('id_consulta') id_consulta: number): Promise<Consulta> {
    return this.consultaService.findOne(id_consulta);
  }

  @Patch(':id_consulta')
  update(@Param('id_consulta') id_consulta: number, @Body() updateDto: ConsultaDto): Promise<Consulta> {
      return this.consultaService.update(id_consulta, updateDto);
  }

  @Delete(':id_consulta')
  @HttpCode(204)
  remove(@Param('id_consulta') id_consulta: number): Promise<void> {
    return this.consultaService.remove(id_consulta);
  }
}
