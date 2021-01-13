import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacemashController } from './facemash.controller';
import { FacemashService } from './facemash.service';
import { Cat } from './entities/Cat.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'mongodb',
      port: 27017,
      username: 'test',
      password: 'test',
      database: 'facemash',
      entities: [Cat],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Cat]),
  ],
  controllers: [FacemashController],
  providers: [FacemashService],
})
export class FacemashModule {}
