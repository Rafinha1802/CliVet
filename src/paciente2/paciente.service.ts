import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PacienteDto } from './dto/paciente.dto';
import { Paciente } from './entity/paciente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PacienteService {
  constructor (
    @InjectRepository(Paciente)
    private pacientesRepository: Repository<Paciente>,
  ) {}  

  async create(pacienteData:PacienteDto): Promise<Paciente> {
       const novoPaciente = this.pacientesRepository.create(pacienteData);
       return this.pacientesRepository.save(novoPaciente);
  }

  findAll(): Promise<Paciente[]> {
    return this.pacientesRepository.find();
  }

  async findOne(id: number): Promise<Paciente>{
       const paciente = await this.pacientesRepository.findOneBy({id});
       if(!paciente){
           throw new NotFoundException(`Paciente com ID ${id} não encontrado.`)
       }
       return paciente;
   }

   async update(id: number, updateData: PacienteDto): Promise<Paciente> {
       const paciente = await this.findOne(id);
       this.pacientesRepository.merge(paciente, updateData);
       return this.pacientesRepository.save(paciente);
   }

   async remove(id: number): Promise<void> {
       const result = await this.pacientesRepository.delete(id);
       if(result.affected === 0){
           throw new NotFoundException(`Paciente com ID ${id} não encontrado para excluir.`)
       }
   }

}
