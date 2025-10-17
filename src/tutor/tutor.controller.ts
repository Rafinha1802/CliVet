import { Body, Controller,Delete,Get,HttpCode,Param,Patch,Post } from '@nestjs/common';
import { TutorService } from './tutor.service';
import { TutorDto } from './dto/tutor.dto';
import { Tutor } from './entity/tutor.entity';

@Controller('tutor')
export class TutorController {
   constructor(private readonly tutorService: TutorService){}

   @Post()
   create(@Body() tutorData: TutorDto){
       return this.tutorService.create(tutorData);
   }

   @Get()
   findAll(): Promise<Tutor[]> {
       return this.tutorService.findAll();
   }

   @Get(':id')
   findOne(@Param('id') id: number): Promise<Tutor>{
       return this.tutorService.findOne(id);
   }

   @Patch(':id')
   update(@Param('id') id: number, @Body() updateDto: TutorDto): Promise<Tutor>{
       return this.tutorService.update(id, updateDto);
   }

   @Delete(':id')
   @HttpCode(204)
   remove(@Param('id') id: number): Promise<void> {
       return this.tutorService.remove(id);
   }
}
