import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  all(): string {
    return 'Todos!';
  }
  new(): string {
    return 'nuevo!';
  }
  update(): string {
    return 'actualiza!';
  }
  delete(): string {
    return 'elimina!';
  }
  
}
