import { MiddlewareConsumer, Module } from '@nestjs/common'
import { LIB_MODULES } from './libs'
import { CORE_MODULES } from './core'
import { API_MODULES } from './api'
import { LoggerMiddleware } from './libs/logger/middleware'

@Module({
	imports: [...LIB_MODULES, ...CORE_MODULES, ...API_MODULES],
})
export class AppModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(LoggerMiddleware).forRoutes('*')
	}
}
