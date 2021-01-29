import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ThingdataModule } from './thingdata/thingdata.module';
import { SocketGateway } from './socket.gateway';
import { SocketModule } from './socket/socket.module';

@Module({
  imports: [ThingdataModule, SocketModule],
  controllers: [AppController],
  providers: [AppService, SocketGateway],
})
export class AppModule {}
