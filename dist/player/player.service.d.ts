import { Player } from './player.entity';
export declare class PlayerService {
    private players;
    verPlayers(): Player[];
    getPlayer(id: any): Player;
    insertPlayer(player: any): Player;
}
