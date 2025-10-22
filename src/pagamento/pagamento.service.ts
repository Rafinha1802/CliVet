import { Injectable, NotFoundException } from '@nestjs/common';
import { PagamentoDto } from './dto/pagamento.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pagamento } from './entity/pagamento.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PagamentoService {
   constructor(
       @InjectRepository(Pagamento)
       private pagamentosRepository:Repository<Pagamento>,
   ){}


   async create(pagamentoData:PagamentoDto): Promise<Pagamento> {
       const novoPagamento = this.pagamentosRepository.create(pagamentoData);
       return this.pagamentosRepository.save(novoPagamento);
   }
   
   findAll(): Promise<Pagamento[]>{
       return this.pagamentosRepository.find();
   }

   async findOne(id: number): Promise<Pagamento>{
       const pagamento = await this.pagamentosRepository.findOneBy({id});
       if(!pagamento){
           throw new NotFoundException(`Pagamento com ID ${id} não encontrado.`)
       }
       return pagamento;
   }

   async update(id: number, updateData: PagamentoDto): Promise<Pagamento> {
       const pagamento = await this.findOne(id);
       this.pagamentosRepository.merge(pagamento, updateData);
       return this.pagamentosRepository.save(pagamento);
   }

   async remove(id: number): Promise<void> {
       const result = await this.pagamentosRepository.delete(id);
       if(result.affected === 0){
           throw new NotFoundException(`Pagamento com ID ${id} não encontrado para excluir.`)
       }
   }

}