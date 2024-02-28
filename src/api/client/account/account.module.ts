import { Module } from '@nestjs/common'
import { ClientAccountController } from './account.controller'
import { ClientAccountService } from './account.service'
import { UserModule } from 'src/core/users/user.module'

@Module({
	controllers: [ClientAccountController],
	providers: [ClientAccountService],
	imports: [UserModule.forFeature()],
})
export class ClientAccountModule {}
