import { Inject, Injectable } from '@nestjs/common'
import { Prisma, Session } from '@prisma/client'
import { DatabaseService } from 'src/libs/database/database.service'
import { DB_SERVICE } from 'src/libs/database/types'
import { ISessionRepository } from '../types'

@Injectable()
export class SessionRepository implements ISessionRepository {
	private readonly sessionRepository: Prisma.SessionDelegate
	constructor(@Inject(DB_SERVICE) private readonly dbService: DatabaseService) {
		this.sessionRepository = this.dbService.session
	}

	async createSession(params: { data: Prisma.SessionCreateInput }): Promise<Session> {
		try {
			const { data } = params
			return this.sessionRepository.create({ data })
		} catch (error) {
			console.log('create Session error:', error)
		}
	}

	async getSession(params: {
		skip?: number
		take?: number
		cursor?: Prisma.SessionWhereUniqueInput
		where?: Prisma.SessionWhereInput
		orderBy?: Prisma.SessionOrderByWithRelationInput
	}): Promise<Session[]> {
		try {
			const { skip, take, cursor, where, orderBy } = params
			return this.sessionRepository.findMany({
				skip,
				take,
				cursor,
				where,
				orderBy,
			})
		} catch (error) {
			console.log('get Session error:', error)
		}
	}

	async updateSession(params: {
		where: Prisma.SessionWhereUniqueInput
		data: Prisma.SessionUpdateInput
	}): Promise<Session> {
		try {
			const { where, data } = params
			return this.sessionRepository.update({ where, data })
		} catch (error) {
			console.log('update Session error:', error)
		}
	}

	async deleteSession(params: { where: Prisma.SessionWhereUniqueInput }): Promise<void> {
		try {
			const { where } = params
			this.sessionRepository.delete({ where })
		} catch (error) {
			console.log('delete Session error:', error)
		}
	}
}
