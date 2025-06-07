import { Controller } from '@nestjs/common';
import { DetectionService } from 'src/modules/detection/detection.service';

@Controller()
export class DetectionController {
  constructor(private readonly service: DetectionService) {}
}
