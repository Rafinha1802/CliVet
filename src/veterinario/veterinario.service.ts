import { Injectable, NotFoundException } from '@nestjs/common';
import { VeterinarioDto } from './dto/veterinario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Veterinario } from './entities/veterinario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VeterinarioService {
   constructor(
       @InjectRepository(Veterinario)
       private veterinariosRepository:Repository<Veterinario>,
   ){}

   async create(veterinarioData:VeterinarioDto): Promise<Veterinario> {
       const novoVeterinario = this.veterinariosRepository.create(veterinarioData);
       return this.veterinariosRepository.save(novoVeterinario);
   }

   findAll(): Promise<Veterinario[]>{
       return this.veterinariosRepository.find();
   }

   async findOne(id_veterinario: number): Promise<Veterinario>{
       const veterinario = await this.veterinariosRepository.findOneBy({id_veterinario});
       if(!veterinario){
           throw new NotFoundException(`Veterinario com ID ${id_veterinario} não encontrado.`)
       }
       return veterinario;
   }

   async update(id_veterinario: number, updateData: VeterinarioDto): Promise<Veterinario> {
       const veterinario = await this.findOne(id_veterinario);
       this.veterinariosRepository.merge(veterinario, updateData);
       return this.veterinariosRepository.save(veterinario);
   }

   async remove(id_veterinario: number): Promise<void> {
       const result = await this.veterinariosRepository.delete(id_veterinario);
       if(result.affected === 0){
           throw new NotFoundException(`Veterinario com ID ${id_veterinario} não encontrado para excluir.`)
       }
   }
}
