import { DetectionModule } from '@modules/detection/detection.module';
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
    DetectionModule,
  ],
})
export class AppModule {}
