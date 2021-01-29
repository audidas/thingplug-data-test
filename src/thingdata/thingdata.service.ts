import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import * as parser from 'fast-xml-parser';
import { SocketService } from 'src/socket/socket.service';

@Injectable()
export class ThingdataService {
  constructor(private readonly socketService: SocketService) {}

  getThingPlugData(req: Request, body): void {
    this.socketService.socket.emit('receive', { body });
  }
}
