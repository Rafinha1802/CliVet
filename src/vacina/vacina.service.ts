import { Injectable, NotFoundException } from '@nestjs/common';
import { VacinaDto } from './dto/vacina.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Vacina } from './entity/vacina.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VacinaService {
  constructor(
    @InjectRepository(Vacina)
      private vacinasRepository:Repository<Vacina>,
  ){}

  async create(vacinaData:VacinaDto): Promise<Vacina> {
         const novoVacina = this.vacinasRepository.create(vacinaData);
         return this.vacinasRepository.save(novoVacina);
     }

  findAll(): Promise<Vacina[]>{
         return this.vacinasRepository.find();
     }

  async findOne(id: number): Promise<Vacina>{
         const vacina = await this.vacinasRepository.findOneBy({id});
         if(!vacina){
             throw new NotFoundException(`Vacina com ID ${id} não encontrado.`)
         }
         return vacina;
     }

  async update(id: number, updateData: VacinaDto): Promise<Vacina> {
         const vacina = await this.findOne(id);
         this.vacinasRepository.merge(vacina, updateData);
         return this.vacinasRepository.save(vacina);
     }
  
     async remove(id: number): Promise<void> {
         const result = await this.vacinasRepository.delete(id);
         if(result.affected === 0){
             throw new NotFoundException(`Vacina com ID ${id} não encontrado para excluir.`)
         }
     }
}
