import { Player } from './player.entity';
import { PlayerService } from './player.service';
export declare class PlayerController {
    private playerService;
    constructor(playerService: PlayerService);
    getAll(): Player[];
    getPlayer(id: any): Player;
}
