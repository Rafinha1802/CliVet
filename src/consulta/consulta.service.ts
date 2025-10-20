import { Injectable, NotFoundException } from '@nestjs/common';
import { ConsultaDto } from './dto/consulta.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Consulta } from './entities/consulta.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ConsultaService {
  constructor(
    @InjectRepository(Consulta)
    private consultaRepository: Repository<Consulta>,
  ) {}
  async create(consultaData: ConsultaDto): Promise<Consulta> {
    const novaConsulta = this.consultaRepository.create(consultaData);
    return this.consultaRepository.save(novaConsulta);
  }

  findAll(): Promise<Consulta[]> {
    return this.consultaRepository.find();
  }

  async findOne(id_consulta: number): Promise<Consulta> {
    const consulta = await this.consultaRepository.findOneBy({ id_consulta });
    if (!consulta) {
      throw new NotFoundException(
        `Consulta com ID ${id_consulta} não encontrada.`)
    }
    return consulta;
  }

  async update(id_consulta: number, updateData: ConsultaDto): Promise<Consulta> {
    const consulta = await this.findOne(id_consulta);
    this.consultaRepository.merge(consulta, updateData);
    return this.consultaRepository.save(consulta);
  }

  async remove(id_consulta: number): Promise<void> {
    const result = await this.consultaRepository.delete(id_consulta);
    if (result.affected === 0) {
      throw new NotFoundException(
        `Consulta com ID ${id_consulta} não encontrada para excluir.`)
    }
  
  }
}
