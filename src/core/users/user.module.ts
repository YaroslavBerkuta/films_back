import { DynamicModule, Module } from '@nestjs/common'
import { UserService } from './services/user.service'
import { USER_REPOSITORY, USER_SERVICE } from './types'
import { UserCryptoService } from './services/user-crypto.service'
import { UserRepository } from './repository'
import { USER_SEED } from './seed'

@Module({})
export class UserModule {
	static imports() {
		return []
	}

	static getProviders() {
		return [
			{ provide: USER_SERVICE, useClass: UserService },
			{
				provide: USER_REPOSITORY,
				useClass: UserRepository,
			},
			UserCryptoService,
			...USER_SEED,
		]
	}

	static forRoot(): DynamicModule {
		return {
			module: UserModule,
			providers: this.getProviders(),
			imports: this.imports(),
		}
	}

	static forFeature(): DynamicModule {
		return {
			module: UserModule,
			providers: this.getProviders(),
			imports: this.imports(),
			exports: [USER_REPOSITORY, USER_SERVICE],
		}
	}
}
