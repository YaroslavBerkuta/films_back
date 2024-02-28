import { Body, Controller, Param, Post, Get } from '@nestjs/common'
import { CreateAccountDto } from './dto'
import { ClientAccountService } from './account.service'

@Controller('client/account')
export class ClientAccountController {
	constructor(private readonly accountService: ClientAccountService) {}
	@Post('create')
	createAccount(@Body() dto: CreateAccountDto) {
		return this.accountService.createAccount(dto)
	}

	@Get(':id')
	getAccount(@Param('id') id: number) {
		return this.accountService.getAccount(id)
	}
}
