import { Controller, Get } from '@nestjs/common';
import { FacemashService } from './facemash.service';
import { Cat } from './entities/Cat.entity';

@Controller()
export class FacemashController {
  constructor(private readonly appService: FacemashService) {}

  @Get('/api/cats')
  getCats(): Promise<Cat[]> {
    return this.appService.getCats();
  }
}
