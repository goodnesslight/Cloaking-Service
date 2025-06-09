import { Module } from '@nestjs/common';
import { VpnApiService } from '@modules/vpn-api/vpn-api.service';
import { HttpModule } from '@nestjs/axios';
import { CacheModule } from '@modules/cache/cache.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [HttpModule, CacheModule, ConfigModule],
  providers: [VpnApiService],
})
export class VpnApiModule {}
