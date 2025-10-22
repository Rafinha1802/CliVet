import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Medicamento{
   @PrimaryGeneratedColumn()
   id: number;

   @Column({
       length:25
   })
   nome_comercial: string;
   
   @Column({
       length:50
   })
   principio_ativo: string;

   @Column({
       length:50
   })
   forma_farmaceutica: string;

   @Column({
       length:10
   })
   dosagem: string;

   @Column({
       length:20
   })
   apresentacao: string;
   
   @Column({
       length:15
   })
   fabricante: string;
   
   @Column({
       length:15
   })
   lote: string;
   
   @Column('date')
   data_fabricacao: Date;
   
   @Column('date')
   data_validade: Date;

   @Column({
       length:20
   })
   indicacao: string;

   @Column({
       length:20
   })
   contra_indicacao: string;
      
   @Column('int')
   valor_medicamento: number;   
}
