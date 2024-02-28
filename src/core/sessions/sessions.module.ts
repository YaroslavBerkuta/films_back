import { Global, Module } from '@nestjs/common'
import { SESSION_REPOSITORY, SESSION_SERVICE } from './types'
import { SessionRepository } from './repository'
import { JwtModule } from 'src/libs/jwt/jwt.module'
import { UserModule } from '../users/user.module'

@Global()
@Module({
	providers: [{ provide: SESSION_REPOSITORY, useClass: SessionRepository }],
	exports: [SESSION_REPOSITORY, SESSION_SERVICE],
	imports: [JwtModule.forFeature(), UserModule.forFeature()],
})
export class SesionModule {}
