import { Prisma, Session } from '@prisma/client'

export interface ISessionRepository {
	createSession(params: { data: Prisma.SessionCreateInput }): Promise<Session>
	getSession(params: {
		skip?: number
		take?: number
		cursor?: Prisma.SessionWhereUniqueInput
		where?: Prisma.SessionWhereInput
		orderBy?: Prisma.SessionOrderByWithRelationInput
	}): Promise<Session[]>
	updateSession(params: {
		where: Prisma.SessionWhereUniqueInput
		data: Prisma.SessionUpdateInput
	}): Promise<Session>
	deleteSession(params: { where: Prisma.SessionWhereUniqueInput }): Promise<void>
}
