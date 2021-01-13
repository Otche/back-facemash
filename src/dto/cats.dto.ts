import { IsNotEmpty, IsArray, IsNumber } from 'class-validator';
import { Cat } from 'src/entities/Cat.entity';
import { ApiProperty } from '@nestjs/swagger';
export class CatsApiDto {
  @ApiProperty() @IsArray() results: Cat[];
  @ApiProperty() @IsNotEmpty() @IsNumber() count: number;
}
