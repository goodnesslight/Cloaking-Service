import { Module } from '@nestjs/common';
import { DetectionService } from '@modules/detection/detection.service';
import { DetectionRepository } from '@modules/detection/detection.repository';

@Module({
  imports: [],
  providers: [DetectionService, DetectionRepository],
  exports: [DetectionService],
})
export class DetectionModule {}
