import { Body, Controller, Get, Post } from '@nestjs/common';
import { Request } from 'express';
import { ThingdataService } from './thingdata.service';

@Controller('thingdata')
export class ThingdataController {
  constructor(private readonly thingdataService: ThingdataService) {}

  @Post('/')
  getThingPlugData(req: Request, @Body() body) {
    this.thingdataService.getThingPlugData(req, body);
  }
}
