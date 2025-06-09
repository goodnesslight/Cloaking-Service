import { Model, Document, FilterQuery, UpdateQuery } from 'mongoose';

export abstract class AbstractRepository<T extends Document> {
  constructor(protected readonly entity: Model<T>) {}

  async create(data: Partial<T>): Promise<T> {
    return await new this.entity(data).save();
  }

  async update(id: string, dto: UpdateQuery<T>): Promise<T | null> {
    return await this.entity.findByIdAndUpdate(id, dto, { new: true }).exec();
  }

  async delete(id: string): Promise<T | null> {
    return await this.entity.findByIdAndDelete(id).exec();
  }

  async findAll(filter: FilterQuery<T> = {}): Promise<T[]> {
    return await this.entity.find(filter).exec();
  }

  async findOne(filter: FilterQuery<T>): Promise<T | null> {
    return await this.entity.findOne(filter).exec();
  }

  async findById(id: string): Promise<T | null> {
    return await this.entity.findById(id).exec();
  }
}
