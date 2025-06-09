import { DetectionRepository } from '@modules/detection/detection.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DetectionService {
  constructor(private readonly repository: DetectionRepository) {}

  async create(ip: string): Promise<void> {
    await this.repository.create({ ip });
  }
}
