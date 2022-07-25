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

  //...player carga los datos de ese json q llega 
  //a el array de json q esta seleccionado
  insertPlayer(player): Player {
    this.players.push({
      id: this.players.length + 1,
      ...player,
    });
    return this.players[this.players.length - 1];
  }
}
