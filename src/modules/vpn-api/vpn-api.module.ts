import { Module } from '@nestjs/common';
import { VpnApiService } from '@modules/vpn-api/vpn-api.service';
import { HttpModule } from '@nestjs/axios';
import { CacheModule } from 'src/external/cache/cache.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [HttpModule, CacheModule, ConfigModule],
  providers: [VpnApiService],
  exports: [VpnApiService],
})
export class VpnApiModule {}
