import { Injectable, NotFoundException } from '@nestjs/common';
import { TutorDto } from './dto/tutor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tutor } from './entity/tutor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TutorService {
   constructor(
       @InjectRepository(Tutor)
       private tutoresRepository:Repository<Tutor>,
   ){}


   async create(tutorData:TutorDto): Promise<Tutor> {
       const novoTutor = this.tutoresRepository.create(tutorData);
       return this.tutoresRepository.save(novoTutor);
   }
   
   findAll(): Promise<Tutor[]>{
       return this.tutoresRepository.find();
   }

   async findOne(id: number): Promise<Tutor>{
       const tutor = await this.tutoresRepository.findOneBy({id});
       if(!tutor){
           throw new NotFoundException(`Tutor com ID ${id} não encontrado.`)
       }
       return tutor;
   }

   async update(id: number, updateData: TutorDto): Promise<Tutor> {
       const tutor = await this.findOne(id);
       this.tutoresRepository.merge(tutor, updateData);
       return this.tutoresRepository.save(tutor);
   }

   async remove(id: number): Promise<void> {
       const result = await this.tutoresRepository.delete(id);
       if(result.affected === 0){
           throw new NotFoundException(`Tutor com ID ${id} não encontrado para excluir.`)
       }
   }

}
