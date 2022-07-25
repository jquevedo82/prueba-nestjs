import { Controller, Get, Param } from '@nestjs/common';
import { Player } from './player.entity';
import { PlayerService } from './player.service';

@Controller('player')
export class PlayerController {
  constructor(private playerService: PlayerService) {}

  @Get()
  getAll(): Player[] {
    return this.playerService.verPlayers();
  }

  @Get(':id')
  getPlayer(@Param('id') id):Player{
    return this.playerService.getPlayer(id);

  }

}
function params(arg0: string) {
  throw new Error('Function not implemented.');
}

