import { Module } from '@nestjs/common';
import { RedisModule } from '@nestjs-modules/ioredis';
import { CacheService } from 'src/external/cache/cache.service';

@Module({
  imports: [RedisModule],
  providers: [CacheService],
  exports: [CacheService],
})
export class CacheModule {}
