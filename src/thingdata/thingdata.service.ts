import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class ThingdataService {
  getThingPlugData(req: Request,body): void {
    console.log(req);
  }
}
