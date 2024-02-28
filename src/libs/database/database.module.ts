import { Global, Module } from '@nestjs/common'
import { DatabaseService } from './database.service'
import { DB_SERVICE } from './types'

@Global()
@Module({
	providers: [
		{
			provide: DB_SERVICE,
			useClass: DatabaseService,
		},
	],
	exports: [DB_SERVICE],
})
export class DatabaseModule {}
