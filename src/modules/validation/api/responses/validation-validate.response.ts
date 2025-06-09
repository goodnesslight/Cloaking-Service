import { ValidationValidateStructure } from '@modules/validation/validation.types';
import { ApiProperty } from '@nestjs/swagger';

export class ValidationValidateResponse implements ValidationValidateStructure {
  @ApiProperty()
  ip: string;

  @ApiProperty()
  isBot: boolean;
}
