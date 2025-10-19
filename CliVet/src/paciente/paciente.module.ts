import { Module } from '@nestjs/common';
import { PacienteController } from './paciente.controller';
import { PacienteService } from './paciente.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paciente } from './entity/paciente.entity';


@Module({
  imports:[TypeOrmModule.forFeature([Paciente]),
],
  controllers: [PacienteController],
  providers: [PacienteService]
})
export class PacienteModule {}
