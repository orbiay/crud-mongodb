import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.schema';

@Controller()
export class AppController {
  constructor(private readonly appservice: AppService) {}

  @Post()
  async create(@Body() user: User) {
    return await this.appservice.create(user);
  }

  @Get()
  async findAll() {
    return await this.appservice.findAll();
  }
  @Put('update/:id')
  async update(@Body() user: Partial<User>,@Param('id') id: string){

    return await this.appservice.update(id,user);
  }
  @Delete('delete/:id')
  delete(@Param('id') id: string){
    return this.appservice.delete(id);
  }
}

