import { Inject, Injectable } from '@nestjs/common'
import { Seeder } from 'src/shared'
import { USER_REPOSITORY, USER_SERVICE } from '../types'
import { IUserRepository, IUserService } from '../types/interfaces'
import { $Enums } from '@prisma/client'

@Injectable()
export class AdminUserSeed extends Seeder {
	@Inject(USER_SERVICE) private readonly userService: IUserService
	@Inject(USER_REPOSITORY) private readonly userRepository: IUserRepository
	protected name: string = 'admin user seed'

	private mockUser = {
		email: 'admin@admin.com',
		role: $Enums.UserRole.a,
		name: 'Admin',
		password: '123qqq',
		phoneNumber: '380984288239',
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
