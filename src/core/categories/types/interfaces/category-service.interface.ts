import { Category, Prisma } from '@prisma/client';
import { CategoryType } from '../enums';

export interface ICategoryRepository {
  createCategory(params: {
    data: Prisma.CategoryCreateInput;
  }): Promise<Category>;
  getCategory(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.CategoryWhereUniqueInput;
    where?: Prisma.CategoryWhereInput;
    orderBy?: Prisma.CategoryOrderByWithRelationInput;
  }): Promise<Category[]>;
  updateCategory(params: {
    where: Prisma.CategoryWhereUniqueInput;
    data: Prisma.CategoryUpdateInput;
  }): Promise<Category>;
  deleteCategory(params: {
    where: Prisma.CategoryWhereUniqueInput;
  }): Promise<void>;
}

export interface ICategoryService {
  create(payload: ICreateCategoryPayload): Promise<Category>;
  update(id: number, payload: IUpdateCategoryPayload): Promise<Category>;
  delete(id: number): Promise<void>;
}

export interface IUpdateCategoryPayload {
  title?: string;
  type?: CategoryType;
}

export interface ICreateCategoryPayload {
  title: string;
  type: CategoryType;
}
