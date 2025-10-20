import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vacina } from './entity/vacina.entity';
import { VacinaController } from './vacina.controller';
import { VacinaService } from './vacina.service';


@Module({
  imports:[TypeOrmModule.forFeature([Vacina]),
  ],
  controllers: [VacinaController],
  providers: [VacinaService]
})
export class VacinaModule {}
