import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Consulta {
   @PrimaryGeneratedColumn()
   id_consulta: number;

   @Column('date')
   data_cons: string;

   @Column('time')
   hora_cons: string;

   @Column({
         length:50
   })
   tipo: string;

   @Column({
         length:50
   })
   motivo_principal: string;

   @Column({
         length:50
   })
   exame_clinico: string;

   @Column({
         length:50
   })
   diagnostico: string;

   @Column({
         length:50
   })
   procedimentos: string;

   @Column({
         length:50
   })
   prescricao: string;

   @Column('float')
   valor_consulta: number;
}
