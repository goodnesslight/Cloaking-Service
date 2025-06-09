import { AbstractRepository } from '@common/abstracts/repository.abstract';
import { DetectionEntity } from './detection.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DetectionRepository extends AbstractRepository<DetectionEntity> {}
