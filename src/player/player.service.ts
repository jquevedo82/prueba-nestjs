import { Injectable } from '@nestjs/common';
import { Player } from './player.entity';

@Injectable()
export class PlayerService {
  private players: Player[] = [
    {
      id: 1,
      name: 'Pele',
      posicion: 'Delantero',
      Equipo: 'Brasil',
      Edad: 24,
    },
    {
      id: 2,
      name: 'Maradona',
      posicion: 'Delantero',
      Equipo: 'Argentina',
      Edad: 21,
    },
  ];
  verPlayers(): Player[] {
    return this.players;
  }
  getPlayer(id: any): Player {
    return this.players.find((player) => player.id == id);
  }
}
