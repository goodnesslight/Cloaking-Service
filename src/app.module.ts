import { CacheModule } from 'src/external/cache/cache.module';
import { DetectionModule } from '@modules/detection/detection.module';
import { ValidationModule } from '@modules/validation/validation.module';
import { VpnApiModule } from '@modules/vpn-api/vpn-api.module';
import { RedisModule } from '@nestjs-modules/ioredis';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const hostname: string = config.get<string>('MONGO_HOSTNAME');
        const port: string = config.get<string>('MONGO_PORT');
        const database: string = config.get<string>('MONGO_DATABASE');
        return {
          uri: `mongodb://${hostname}:${port}/${database}`,
        };
      },
    }),
    RedisModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const hostname: string = config.get<string>('REDIS_HOSTNAME');
        const port: string = config.get<string>('REDIS_PORT');
        const password: string = config.get<string>('REDIS_PASSWORD');
        return {
          type: 'single',
          options: {
            host: hostname,
            port: Number(port),
            password,
          },
        };
      },
    }),
    CacheModule,
    DetectionModule,
    ValidationModule,
    VpnApiModule,
  ],
})
export class AppModule {}
