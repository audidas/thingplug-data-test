import { Module } from '@nestjs/common';
import { ThingdataController } from './thingdata.controller';
import { ThingdataService } from './thingdata.service';

@Module({
  controllers: [ThingdataController],
  providers: [ThingdataService]
})
export class ThingdataModule {}
