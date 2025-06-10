import { Injectable } from '@nestjs/common';
import { InjectRedis } from '@nestjs-modules/ioredis';
import Redis from 'ioredis';
import { CacheKey } from 'src/external/cache/cache.enums';

@Injectable()
export class CacheService {
  constructor(@InjectRedis() private readonly redis: Redis) {}

  async hSet<T>(
    key: CacheKey,
    field: string | Buffer,
    value: T,
  ): Promise<void> {
    await this.redis.hset(key, field, JSON.stringify(value));
  }

  async hGet<T>(key: CacheKey, field: string | Buffer): Promise<T | null> {
    const value: string | null = await this.redis.hget(key, field);

    if (!value) {
      return null;
    }

    return JSON.parse(value);
  }
}
