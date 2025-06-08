import { ValidationService } from '@modules/validation/validation.service';
import { Controller } from '@nestjs/common';

@Controller()
export class ValidationController {
  constructor(private readonly service: ValidationService) {}
}
