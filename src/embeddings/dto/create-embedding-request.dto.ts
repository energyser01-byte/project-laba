import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString } from 'class-validator';

export class EmbeddingsRequestDto {
  @ApiProperty({ type: [String], example: ['Как продлить полис?', 'Продление страховки'] })
  @IsArray()
  @IsString({ each: true })
  texts: string[];
}
