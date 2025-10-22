import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pagamento {
   @PrimaryGeneratedColumn()
   id: number;

   @Column('date')
   data_pag: Date;

   @Column({
       length:50
   })
   forma_pag: string;

   @Column('int')
   valor_pag: number;   
}
