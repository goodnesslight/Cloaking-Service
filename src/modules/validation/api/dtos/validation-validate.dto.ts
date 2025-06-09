import { ValidationValidateStructure } from '@modules/validation/validation.types';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ValidationValidateDto implements ValidationValidateStructure {
  @ApiProperty()
  @IsString()
  ip: string;
}
