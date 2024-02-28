import { DatabaseModule } from './database/database.module'
import { FileStorageModule } from './file-storage/file-storage.module'
import { JwtModule } from './jwt/jwt.module'
import { LogerModule } from './logger/logger.module'

export const LIB_MODULES = [
	DatabaseModule,
	LogerModule,
	JwtModule.forRoot({
		paylodKey: '1829JS12,W0-L12,',
		jwtKey: 'ASD12JD12M0,9-D1S21',
	}),
	FileStorageModule.forRoot({
		cloud_name: 'dlol3qsbn',
		api_key: '337377747739897',
		api_secret: 'lkPPvu_zTeAqjPZUIP6NqNpkCCo',
	}),
]
