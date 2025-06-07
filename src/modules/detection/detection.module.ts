import { Module } from '@nestjs/common';
import { DetectionController } from './detection.controller';
import { DetectionService } from 'src/modules/detection/detection.service';

@Module({
  imports: [],
  controllers: [DetectionController],
  providers: [DetectionService],
})
export class DetectionModule {}
