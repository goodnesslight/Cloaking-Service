import { Module } from '@nestjs/common';
import { DetectionService } from '@modules/detection/detection.service';
import { DetectionRepository } from '@modules/detection/detection.repository';
import { MongooseModule } from '@nestjs/mongoose';
import {
  DetectionEntity,
  DetectionSchema,
} from '@modules/detection/detection.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: DetectionEntity.name, schema: DetectionSchema },
    ]),
  ],
  providers: [DetectionService, DetectionRepository],
  exports: [DetectionService],
})
export class DetectionModule {}
