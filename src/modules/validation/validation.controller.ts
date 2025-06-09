import { ValidationValidateDto } from '@modules/validation/api/dtos/validation-validate.dto';
import { ValidationValidateResponse } from '@modules/validation/api/responses/validation-validate.response';
import { ValidationService } from '@modules/validation/validation.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('validation')
export class ValidationController {
  constructor(private readonly service: ValidationService) {}

  @Post('validate')
  async validate(
    @Body() dto: ValidationValidateDto,
  ): Promise<ValidationValidateResponse> {
    return await this.service.validate(dto);
  }
}
