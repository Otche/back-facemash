import { IsNotEmpty, IsArray, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

class CatDto {
  @ApiProperty() @IsNotEmpty() @IsString() id: string;
  @ApiProperty() @IsNotEmpty() @IsString() url: string;
}
export class CatsApiDto {
  @ApiProperty({ isArray: true, type: CatDto }) @IsArray() results: CatDto[];
  @ApiProperty() @IsNotEmpty() @IsNumber() count: number;
}
