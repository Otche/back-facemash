import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cat } from './entities/Cat.entity';

@Injectable()
export class FacemashService {
  constructor(
    @InjectRepository(Cat)
    private usersRepository: Repository<Cat>,
  ) {}

  async getCats(): Promise<Cat[]> {
    return this.usersRepository.find();
  }
}
