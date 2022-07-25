import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { Player } from './player.entity';
import { PlayerService } from './player.service';

@Controller('player')
export class PlayerController {
  constructor(private playerService: PlayerService) {}

  @Get()
  getAll(): Player[] {
    return this.playerService.verPlayers();
  }

  //validacion parseintpipe si no es entero devuelve 404
  //ver validaciones
  @Get(':id')
  getPlayer(@Param('id', ParseIntPipe) id): Player {
    return this.playerService.getPlayer(id);
  }

  @Post()
  crearPlayer(@Body() body) {
    //return body;
    //return `crear un jugador: ${body.name} juega de ${body.posicion}`;
    return this.playerService.insertPlayer(body);
  }
}
