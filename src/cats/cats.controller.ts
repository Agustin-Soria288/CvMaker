import { Controller, Get, Post, Param, Body, Query } from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
    async findAllWithFilters(@Query('age') age: number, @Query('breed') breed: string) {
    return `This action returns all cats filtered by age: ${age} and breed: ${breed}`;
  }

  @Get()
    async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param() params: any): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }
}
