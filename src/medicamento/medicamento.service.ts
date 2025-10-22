import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MedicamentoDto } from './dto/medicamento.dto';
import { Medicamento } from './entity/medicamento.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MedicamentoService {
  constructor (
    @InjectRepository(Medicamento)
    private medicamentosRepository: Repository<Medicamento>,
  ) {}  

  async create(medicamentoData:MedicamentoDto): Promise<Medicamento> {
       const novoMedicamento = this.medicamentosRepository.create(medicamentoData);
       return this.medicamentosRepository.save(novoMedicamento);
  }

  findAll(): Promise<Medicamento[]> {
    return this.medicamentosRepository.find();
  }

  async findOne(id: number): Promise<Medicamento>{
       const medicamento = await this.medicamentosRepository.findOneBy({id});
       if(!medicamento){
           throw new NotFoundException(`Medicamento com ID ${id} não encontrado.`)
       }
       return medicamento;
   }

   async update(id: number, updateData: MedicamentoDto): Promise<Medicamento> {
       const medicamento = await this.findOne(id);
       this.medicamentosRepository.merge(medicamento, updateData);
       return this.medicamentosRepository.save(medicamento);
   }

   async remove(id: number): Promise<void> {
       const result = await this.medicamentosRepository.delete(id);
       if(result.affected === 0){
           throw new NotFoundException(`Medicamento com ID ${id} não encontrado para excluir.`)
       }
   }

}
