import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Veterinario {
    @PrimaryGeneratedColumn()
    id_veterinario: number;

    @Column({
       length:10
   })
   crmv: string;

   @Column({
    length:100
   })
   nome_veterinario: string;

   @Column({
    length: 50
   })
   especialidade: string;

   @Column({
    length: 100
   })
   endereco: string;

   @Column({
    length: 15
   })
   telefone: string;

   @Column({
    length: 50
   })
   email: string;

   @Column('time')
   horario_de_atendimento: string;
}
