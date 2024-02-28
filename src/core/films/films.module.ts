import { DynamicModule, Module } from '@nestjs/common'
import { FILMS_REPOSITORY, FILMS_SERVICE, FILM_INFO_REPOSITORY } from './types/consts'
import { FilmsInfoRepository, FilmsRepository } from './repository'
import { FilmsService } from './services/films.service'

@Module({})
export class FilmsModule {
	static getProviders() {
		return [
			{ provide: FILMS_REPOSITORY, useClass: FilmsRepository },
			{ provide: FILM_INFO_REPOSITORY, useClass: FilmsInfoRepository },
			{ provide: FILMS_SERVICE, useClass: FilmsService },
		]
	}

	static imports() {
		return []
	}

	static forRoot(): DynamicModule {
		return {
			module: FilmsModule,
			providers: this.getProviders(),
			imports: this.imports(),
		}
	}

	static forFeature(): DynamicModule {
		return {
			module: FilmsModule,
			providers: this.getProviders(),
			imports: this.imports(),
			exports: [],
		}
	}
}
