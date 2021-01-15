import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ThingdataModule } from './thingdata/thingdata.module';

@Module({
  imports: [ThingdataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
