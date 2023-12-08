import { DynamicModule, Module } from '@nestjs/common';
import { DatabaseModule } from 'src/libs/database/database.module';
import { CATEGORY_REPOSITORY, CATEGORY_SERVICE } from './types';
import { CategoryRepository } from './repository/category.repository';
import { CategoryService } from './services/category.service';

@Module({})
export class CartegoriesModule {
  static getProviders() {
    return [
      { provide: CATEGORY_REPOSITORY, useClass: CategoryRepository },
      {
        provide: CATEGORY_SERVICE,
        useClass: CategoryService,
      },
    ];
  }

  static imports() {
    return [DatabaseModule];
  }

  static forRoot(): DynamicModule {
    return {
      module: CartegoriesModule,
      providers: this.getProviders(),
      imports: this.imports(),
    };
  }

  static forFeature(): DynamicModule {
    return {
      module: CartegoriesModule,
      providers: this.getProviders(),
      imports: this.imports(),
    };
  }
}
