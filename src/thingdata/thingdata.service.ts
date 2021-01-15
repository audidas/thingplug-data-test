import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class ThingdataService {
  getThingPlugData(req: Request): void {
    console.log(req);
  }
}
