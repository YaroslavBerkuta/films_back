import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  CATEGORY_REPOSITORY,
  ICategoryRepository,
  ICategoryService,
  ICreateCategoryPayload,
  IUpdateCategoryPayload,
} from '../types';
import _ from 'lodash';

@Injectable()
export class CategoryService implements ICategoryService {
  @Inject(CATEGORY_REPOSITORY)
  private readonly categoryRepository: ICategoryRepository;

  async create(payload: ICreateCategoryPayload) {
    try {
      const category = await this.categoryRepository.createCategory({
        data: { ...payload },
      });
      return category;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async update(id: number, payload: IUpdateCategoryPayload) {
    try {
      const exist = await this.categoryRepository.getCategory({
        where: { id },
      });

      if (exist.length === 0) {
        throw new NotFoundException('Категорію не знайдено');
      }

      const data = _.omitBy(_.omit(payload), _.isNull);

      const category = await this.categoryRepository.updateCategory({
        where: { id },
        data,
      });

      return category;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async delete(id: number) {
    try {
      const exist = await this.categoryRepository.getCategory({
        where: { id },
      });

      if (exist.length === 0) {
        throw new NotFoundException('Категорію не знайдено');
      }
      await this.categoryRepository.deleteCategory({ where: { id } });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
