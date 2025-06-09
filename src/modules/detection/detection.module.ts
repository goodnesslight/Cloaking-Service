import { Module } from '@nestjs/common';
import { DetectionService } from '@modules/detection/detection.service';

@Module({
  imports: [],
  providers: [DetectionService],
})
export class DetectionModule {}
