import { Injectable, Inject, BadRequestException } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { UserCryptoService } from './user-crypto.service'
import { IUser, IUserRepository, IUserService } from '../types/interfaces'
import { USER_REPOSITORY } from '../types'
import { ILogger, LOGGER_SERVICE } from 'src/libs/logger/types'
import { omit } from 'lodash'

@Injectable()
export class UserService extends UserCryptoService implements IUserService {
	@Inject(LOGGER_SERVICE) private readonly loger: ILogger
	@Inject(USER_REPOSITORY) private readonly userRepo: IUserRepository

	private async isExistByEmail(email: string): Promise<boolean> {
		try {
			const existingUsers = await this.userRepo.getUser({
				where: { email },
			})

			if (existingUsers.length > 0) {
				return true
			}

			return false
		} catch (error) {
			this.loger.errorLog(error.message)
			return false
		}
	}

	public async create(payload: Prisma.UserCreateInput): Promise<IUser | unknown> {
		try {
			const isExist = await this.isExistByEmail(payload.email)

			if (isExist) {
				throw new BadRequestException('Пользователь уже существует')
			}

			const { newPass } = await this.hashPassword(payload.password)

			const user = await this.userRepo.createUser({
				data: {
					...payload,
					password: newPass,
				},
			})
			return user
		} catch (error) {
			this.loger.errorLog(error.message)
			return omit(error, ['response'])
		}
	}
}
