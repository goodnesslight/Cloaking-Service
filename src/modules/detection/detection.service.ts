import { DetectionCreateDto } from '@modules/detection/api/dtos/detection-create.dto';
import { DetectionRepository } from '@modules/detection/detection.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DetectionService {
  constructor(private readonly repository: DetectionRepository) {}

  async create(dto: DetectionCreateDto): Promise<void> {
    await this.repository.create(dto);
  }
}
