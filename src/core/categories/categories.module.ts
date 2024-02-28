import { DynamicModule, Module } from '@nestjs/common'
import { CATEGORY_REPOSITORY, CATEGORY_SERVICE } from './types'
import { CategoryRepository } from './repository/category.repository'
import { CategoryService } from './services/category.service'

@Module({})
export class CartegoriesModule {
	static getProviders() {
		return [
			{ provide: CATEGORY_REPOSITORY, useClass: CategoryRepository },
			{
				provide: CATEGORY_SERVICE,
				useClass: CategoryService,
			},
		]
	}

	static imports() {
		return []
	}

	static forRoot(): DynamicModule {
		return {
			module: CartegoriesModule,
			providers: this.getProviders(),
			imports: this.imports(),
		}
	}

	static forFeature(): DynamicModule {
		return {
			module: CartegoriesModule,
			providers: this.getProviders(),
			imports: this.imports(),
		}
	}
}
