import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  Todos(): string {
    return this.appService.all();
  }
  @Post()
  Nuevo(): string {
    return this.appService.new();
  }
  @Put()
  Actualizar(): string {
    return this.appService.update();
  }
  @Delete()
  Borrar(): string {
    return this.appService.delete();
  }
}
