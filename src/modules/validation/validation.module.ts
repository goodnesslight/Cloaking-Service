import { Module } from '@nestjs/common';
import { ValidationController } from '@modules/validation/validation.controller';
import { ValidationService } from '@modules/validation/validation.service';
import { VpnApiModule } from '@modules/vpn-api/vpn-api.module';
import { DetectionModule } from '@modules/detection/detection.module';

@Module({
  imports: [VpnApiModule, DetectionModule],
  controllers: [ValidationController],
  providers: [ValidationService],
})
export class ValidationModule {}
