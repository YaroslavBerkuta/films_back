import { UserRole } from '@prisma/client'

export interface IUser {
	id: number
	email: string
	name: string
	role: UserRole
	password: string
	phoneNumber: string
	createdAt: Date
	updatedAt: Date
}
