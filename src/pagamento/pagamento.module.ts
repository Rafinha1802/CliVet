import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pagamento } from './entity/pagamento.entity';
import { PagamentoService } from './pagamento.service';
import { PagamentoController } from './pagamento.controller';


@Module({
   imports:[TypeOrmModule.forFeature([Pagamento]),
],
  controllers: [PagamentoController],
  providers: [PagamentoService],
})
export class PagamentoModule {}
