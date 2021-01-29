import {
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { SocketService } from './socket/socket.service';

@WebSocketGateway()
export class SocketGateway implements OnGatewayInit {
  constructor(private socketService: SocketService) {}

  afterInit(server: Server) {
    this.socketService.socket = server;
  }

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    return 'Hello world!';
  }
}
