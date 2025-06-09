import { Model, Document, FilterQuery, UpdateQuery } from 'mongoose';

export abstract class AbstractRepository<T extends Document> {
  protected constructor(protected readonly model: Model<T>) {}

  async create(data: Partial<T>): Promise<T> {
    return await new this.model(data).save();
  }

  async update(id: string, dto: UpdateQuery<T>): Promise<T | null> {
    return await this.model.findByIdAndUpdate(id, dto, { new: true }).exec();
  }

  async delete(id: string): Promise<T | null> {
    return await this.model.findByIdAndDelete(id).exec();
  }

  async findAll(filter: FilterQuery<T> = {}): Promise<T[]> {
    return await this.model.find(filter).exec();
  }

  async findOne(filter: FilterQuery<T>): Promise<T | null> {
    return await this.model.findOne(filter).exec();
  }

  async findById(id: string): Promise<T | null> {
    return await this.model.findById(id).exec();
  }
}
