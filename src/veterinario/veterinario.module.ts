import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Veterinario } from './entities/veterinario.entity';
import { VeterinarioController } from './veterinario.controller';
import { VeterinarioService } from './veterinario.service';


@Module({
  imports:[TypeOrmModule.forFeature([Veterinario]),
],
  controllers: [VeterinarioController],
  providers: [VeterinarioService],
})
export class VeterinarioModule {}
