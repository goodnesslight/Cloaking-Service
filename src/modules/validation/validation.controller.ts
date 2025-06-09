import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBody, ApiOkResponse } from '@nestjs/swagger';
import { ValidationValidateDto } from '@modules/validation/api/dtos/validation-validate.dto';
import { ValidationValidateResponse } from '@modules/validation/api/responses/validation-validate.response';
import { ValidationService } from '@modules/validation/validation.service';

@ApiTags('validation')
@Controller('validation')
export class ValidationController {
  constructor(private readonly service: ValidationService) {}

  @Post('validate')
  @ApiOperation({
    summary: 'Validates IP and detect bot usage',
  })
  @ApiBody({
    type: ValidationValidateDto,
  })
  @ApiOkResponse({
    type: ValidationValidateResponse,
  })
  async validate(
    @Body() dto: ValidationValidateDto,
  ): Promise<ValidationValidateResponse> {
    return await this.service.validate(dto);
  }
}
