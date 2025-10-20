import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VeterinarioModule } from './veterinario/veterinario.module';
import { TutorModule } from './tutor/tutor.module';
import { PacienteModule } from './paciente2/paciente.module';
import { VacinaModule } from './vacina/vacina.module';

@Module({
  // imports: [VeterinarioModule],[TutorModule],[PacienteModule], [VacinaModule]
  imports: [
   ConfigModule.forRoot({
     isGlobal: true,
   }),
   TypeOrmModule.forRootAsync({
     imports:[ConfigModule],
     useFactory:(configService: ConfigService) => ({
       type:'mysql',
       host:configService.get<string>('MYSQL_DB_HOST'),
       port:configService.get<number>('MYQSL_DB_PORT'),
       username:configService.get<string>('MYSQL_DB_USERNAME'),
       password:configService.get<string>('MYSQL_DB_PASSWORD'),
       database:configService.get<string>('MYSQL_DB_DATABASE'),


       entities:[__dirname + '/**/*.entity{.ts,.js}'],
       synchronize:true,
     }),
     inject:[ConfigService],
   }),
   VeterinarioModule,
   TutorModule,
   PacienteModule,
   VacinaModule,
 ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
