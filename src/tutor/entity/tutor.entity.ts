import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tutor{
   @PrimaryGeneratedColumn()
   id: number;

   @Column({
       length:50
   })
   nome: string;

   @Column({
       length:15
   })
   cpf: string;

   @Column({
       length:100
   })
   endereco: string;

   @Column('date')
   data_nasc: Date;

   @Column({
       length:15
   })
   telefone: string;

   @Column({
       length:25
   })
   email: string;

   @Column({
       length:10
   })
   cliente_fiel: string;
   
}
