import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pacientedto } from './dto/paciente.dto';
import { Paciente } from './entity/paciente.entity';

@Injectable()
export class PacienteService {
    constructor(
        @InjectRepository(Paciente)
        private pacienteRepository: Repository<Paciente>,
    ){}

    async create(PacienteData:Pacientedto): Promise<Paciente>{
        const novoPaciente = this.pacienteRepository.create(PacienteData);
        return this.pacienteRepository.save(novoPaciente);
    }

    findAll(): Promise<Paciente[]>{
        return this.pacienteRepository.find();
    }

    async findOne(id: number): Promise<Paciente>{
        const Paciente = await this.pacienteRepository.findOneBy({id});
        if(!Paciente){
            throw new NotFoundException(`Paciente com ID ${id} não encontrado.`)
        }
        return Paciente;
    }
    
    async update(id: number, updateData: Pacientedto): Promise<Paciente>{
        const Paciente = await this.findOne(id);
        this.pacienteRepository.merge(Paciente, updateData);
        return this.pacienteRepository.save(Paciente);
    }

    async remove(id: number): Promise<void> {
        const result = await this.pacienteRepository.delete(id);
        if(result.affected == 0){
            throw new NotFoundException(`Paciente com ID ${id} não encontrado.`)
        }
    }
}
