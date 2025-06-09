import { AbstractRepository } from '@common/abstracts/repository.abstract';
import { DetectionEntity } from './detection.entity';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class DetectionRepository extends AbstractRepository<DetectionEntity> {
  constructor(
    @InjectModel(DetectionEntity.name)
    entity: Model<DetectionEntity>,
  ) {
    super(entity);
  }
}
