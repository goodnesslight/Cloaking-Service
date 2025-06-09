import { Module } from '@nestjs/common';
import { VpnApiService } from '@modules/vpn-api/vpn-api.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [VpnApiService],
})
export class VpnApiModule {}
