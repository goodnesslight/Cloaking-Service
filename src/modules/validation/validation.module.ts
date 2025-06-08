import { Module } from '@nestjs/common';
import { ValidationController } from '@modules/validation/validation.controller';
import { ValidationService } from '@modules/validation/validation.service';

@Module({
  imports: [],
  controllers: [ValidationController],
  providers: [ValidationService],
})
export class ValidationModule {}
