import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Vacina{
   @PrimaryGeneratedColumn()
   id: number;

   @Column({
       length:50
   })
   nome: string;

   @Column({
       length:25
   })
   fabricante: string;

   @Column({
       length:100
   })
   lote: string;

   @Column('date')
   data_fabricacao: Date;
   
   @Column('date')
   data_validade: Date;

   @Column({
       length:25
   })
   dose: string;

   @Column({
       length:25
   })
   via_administracao: string;

   @Column({
       length:10
   })
   reacao: string;
   
   @Column('int')
   preco: number;   
}
