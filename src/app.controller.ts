import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiCreatedResponse({ description: 'Llamado a todos' })
  Todos(): string {
    return this.appService.all();
  }
  @Post()
  @ApiOkResponse({ description: 'Creando uno nuevo' })
  @ApiUnauthorizedResponse({ description: 'No tiene autorizacion' })
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
