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
       length:20
   })
   especie: string;

   @Column({
       length:20
   })
   raca: string;

   @Column('int')
   idade: number;

   @Column({
       length:15
   })
   sexo: string;

   @Column({
       length:25
   })
   peso: string;

   @Column({
       length:10
   })
   cor: string;
   @Column({
       length:10
   })
   cadastro: string;
   
}
