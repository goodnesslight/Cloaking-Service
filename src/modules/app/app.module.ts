import { DetectionModule } from '@modules/detection/detection.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), DetectionModule],
})
export class AppModule {}
