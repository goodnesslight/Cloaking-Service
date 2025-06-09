import { ValidationValidateStructure } from '@modules/validation/validation.types';
import { IsString } from 'class-validator';

export class ValidationValidateDto implements ValidationValidateStructure {
  @IsString()
  ip: string;
}
