import { Inject, Injectable } from '@nestjs/common'
import { Seeder } from 'src/shared'
import { USER_REPOSITORY, USER_SERVICE } from '../types'
import { IUserRepository, IUserService } from '../types/interfaces'
import { $Enums } from '@prisma/client'

@Injectable()
export class UserSeed extends Seeder {
	@Inject(USER_SERVICE) private readonly userService: IUserService
	@Inject(USER_REPOSITORY) private readonly userRepository: IUserRepository
	protected name: string = 'user seed start'

	private mockUser = {
		email: 'user@user.com',
		role: $Enums.UserRole.u,
		name: 'User',
		password: '123qqq',
		phoneNumber: '380999999999',
	}

	protected async seed(): Promise<void> {
		try {
			const exist = await this.userRepository.getUser({
				where: { email: this.mockUser.email },
			})
			if (exist.length) {
				return
			}
			await this.userService.create(this.mockUser)
		} catch (error) {
			throw new Error(`${this.name} ${error.message}`)
		}
	}
}
