import { DetectionStructure } from '@modules/detection/detection.types';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class DetectionCreateDto implements DetectionStructure {
  @ApiProperty()
  @IsString()
  ip: string;
}
