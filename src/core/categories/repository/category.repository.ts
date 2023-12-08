import { Inject, Injectable } from '@nestjs/common';
import { Category, Prisma } from '@prisma/client';
import { DatabaseService } from 'src/libs/database/database.service';
import { DB_SERVICE } from 'src/libs/database/types';
import { ICategoryRepository } from '../types';

@Injectable()
export class CategoryRepository implements ICategoryRepository {
  private categoryRepository: Prisma.CategoryDelegate;
  constructor(@Inject(DB_SERVICE) private readonly dbService: DatabaseService) {
    this.categoryRepository = this.dbService.category;
  }

  async createCategory(params: {
    data: Prisma.CategoryCreateInput;
  }): Promise<Category> {
    try {
      const { data } = params;
      return this.categoryRepository.create({ data });
    } catch (error) {
      console.log('create category error:', error);
    }
  }

  async getCategory(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.CategoryWhereUniqueInput;
    where?: Prisma.CategoryWhereInput;
    orderBy?: Prisma.CategoryOrderByWithRelationInput;
  }): Promise<Category[]> {
    try {
      const { skip, take, cursor, where, orderBy } = params;
      return this.categoryRepository.findMany({
        skip,
        take,
        cursor,
        where,
        orderBy,
      });
    } catch (error) {
      console.log('get category error:', error);
    }
  }

  async updateCategory(params: {
    where: Prisma.CategoryWhereUniqueInput;
    data: Prisma.CategoryUpdateInput;
  }): Promise<Category> {
    try {
      const { where, data } = params;
      return this.categoryRepository.update({ where, data });
    } catch (error) {
      console.log('update category error:', error);
    }
  }

  async deleteCategory(params: {
    where: Prisma.CategoryWhereUniqueInput;
  }): Promise<void> {
    try {
      const { where } = params;
      this.categoryRepository.delete({ where });
    } catch (error) {
      console.log('delete category error:', error);
    }
  }
}
