import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paciente } from './entity/paciente.entity';
import { PacienteController } from './paciente.controller';
import { PacienteService } from './paciente.service';

@Module({
  imports:[TypeOrmModule.forFeature([Paciente]),
],
  controllers: [PacienteController],
  providers: [PacienteService]
})
export class PacienteModule {}