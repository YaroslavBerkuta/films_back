import { Inject, Injectable } from '@nestjs/common'
import { USER_REPOSITORY, USER_SERVICE } from 'src/core/users/types'
import { IUserRepository, IUserService } from 'src/core/users/types/interfaces'
import { CreateAccountDto } from './dto'

@Injectable()
export class ClientAccountService {
	@Inject(USER_SERVICE) private readonly userService: IUserService
	@Inject(USER_REPOSITORY) private readonly userRepository: IUserRepository

	async createAccount(dto: CreateAccountDto) {
		return await this.userService.create({ ...dto })
	}

	async getAccount(id: number) {
		const users = await this.userRepository.getUser({ where: { id } })
		return users[0]
	}
}
