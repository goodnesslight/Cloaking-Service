import { Controller } from '@nestjs/common';
import { DetectionService } from '@modules/detection/detection.service';

@Controller()
export class DetectionController {
  constructor(private readonly service: DetectionService) {}
}
