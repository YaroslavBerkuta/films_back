import { DynamicModule, Module } from '@nestjs/common'
import { JWT_KEY, JWT_PAYLOAD_KEY, JwtModuleOptions } from './types'
@Module({})
export class JwtModule {
	static options: JwtModuleOptions
	static getProviders() {
		return [
			{
				provide: JWT_PAYLOAD_KEY,
				useValue: JwtModule.options.paylodKey,
			},
			{
				provide: JWT_KEY,
				useValue: JwtModule.options.jwtKey,
			},
		]
	}
	static forRoot(options: JwtModuleOptions): DynamicModule {
		JwtModule.options = options
		return {
			module: JwtModule,
			providers: JwtModule.getProviders(),
		}
	}
	static forFeature(): DynamicModule {
		return {
			module: JwtModule,
			providers: JwtModule.getProviders(),
			exports: [],
		}
	}
}
