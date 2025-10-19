import { Pacientedto } from './dto/paciente.dto';
import { PacienteService } from './paciente.service';
import { Body, Controller, Get, Post,Delete, HttpCode, Param, Patch } from '@nestjs/common';
import { Paciente } from './entity/paciente.entity';

    @Controller('paciente')
       export class PacienteController {
        constructor(private readonly PacienteService: PacienteService){}

    @Post()
    create(@Body() PacienteData: Pacientedto){
        return this.PacienteService.create(PacienteData);
    }
    @Get()
    findAll(): Promise<Paciente[]> {
        return this.PacienteService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Paciente>{
        return this.PacienteService.findOne(id);
}

     @Patch(':id')
     update(@Param('id') id: number, @Body() uptadeDto: Pacientedto): Promise<Paciente>{
        return this.PacienteService.update(id, uptadeDto);
     }

     @Delete(':id')
     @HttpCode(204)
     remove(@Param('id') id: number): Promise<void>{
        return this.PacienteService.remove(id);
     }
}
