import { Prisma, User } from '@prisma/client'

export interface IUserService {
	create(payload: Prisma.UserCreateInput): Promise<User | unknown>
}

export interface IUserRepository {
	createUser(params: { data: Prisma.UserCreateInput }): Promise<User>
	getUser(params: {
		skip?: number
		take?: number
		cursor?: Prisma.UserWhereUniqueInput
		where?: Prisma.UserWhereInput
		orderBy?: Prisma.UserOrderByWithRelationInput
	}): Promise<User[]>

	updateUser(params: {
		where: Prisma.UserWhereUniqueInput
		data: Prisma.UserUpdateInput
	}): Promise<User>

	deleteUser(params: { where: Prisma.UserWhereUniqueInput }): Promise<void>
}
