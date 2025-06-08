import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { DetectionStructure } from './detection.types';
import { Document } from 'mongoose';

@Schema()
export class DetectionEntity extends Document implements DetectionStructure {
  @Prop({ required: true })
  ip: string;
}

export const DetectionSchema = SchemaFactory.createForClass(DetectionEntity);
