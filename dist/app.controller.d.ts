import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    Todos(): string;
    Nuevo(): string;
    Actualizar(): string;
    Borrar(): string;
}
