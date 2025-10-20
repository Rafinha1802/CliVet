import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Paciente{
   @PrimaryGeneratedColumn()
   id: number;

   @Column({
       length:50
   })
   nome: string;

   @Column({
       length:25
   })
   especie: string;

   @Column({
       length:25
   })
   raca: string;

   @Column({
       length:25
   })
   sexo: string;

   @Column('int')
   idade: number;

   @Column('int')
   peso: number;

   @Column({
       length:25
   })
   cor: string;

   @Column({
       length:25
   })
   castracao: string;
   
}

