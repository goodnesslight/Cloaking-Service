import { DetectionService } from '@modules/detection/detection.service';
import { ValidationValidateDto } from '@modules/validation/api/dtos/validation-validate.dto';
import { ValidationValidateResponse } from '@modules/validation/api/responses/validation-validate.response';
import { VpnApiCheckIpResponse } from '@modules/vpn-api/api/responses/vpn-api-check-ip.response';
import { VpnApiService } from '@modules/vpn-api/vpn-api.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ValidationService {
  constructor(
    private readonly vpnApiService: VpnApiService,
    private readonly detectionService: DetectionService,
  ) {}

  async validate(
    dto: ValidationValidateDto,
  ): Promise<ValidationValidateResponse> {
    const response: VpnApiCheckIpResponse = await this.vpnApiService.checkIp(
      dto.ip,
    );
    const isBot: boolean =
      response.security.vpn ||
      response.security.proxy ||
      response.security.tor ||
      response.security.relay;

    if (isBot) {
      await this.detectionService.create(dto.ip);
    }

    return { ...dto, isBot };
  }
}
