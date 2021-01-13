import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common';
import { FacemashService } from './facemash.service';
import { Cat } from './entities/Cat.entity';
import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
import { CatsApiDto } from './dto/cats.dto';

@Injectable()
export class PaginationPipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  transform(value: string, metadata: ArgumentMetadata) {
    if (metadata.data === 'limit') {
      return !value ? 10 : value;
    }

    if (metadata.data === 'start') {
      return !value ? 0 : value;
    }
  }
}

@Controller()
export class FacemashController {
  constructor(private readonly appService: FacemashService) {}
  @Get('/api/cats')
  async getCats(
    @Query('limit', PaginationPipe, ParseIntPipe) limit: number,
    @Query('start', PaginationPipe, ParseIntPipe) start: number,
  ): Promise<CatsApiDto> {
    return {
      results: await this.appService.getCats(start, limit),
      count: await this.appService.countCats(),
    };
  }
}
