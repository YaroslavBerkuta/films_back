import { Inject, Injectable } from '@nestjs/common'
import { Films, Prisma } from '@prisma/client'
import { DatabaseService } from 'src/libs/database/database.service'
import { DB_SERVICE } from 'src/libs/database/types'
import { IFilmsRepository } from '../types'

@Injectable()
export class FilmsRepository implements IFilmsRepository {
	private readonly filmsRepository: Prisma.FilmsDelegate

	constructor(@Inject(DB_SERVICE) private readonly dbService: DatabaseService) {
		this.filmsRepository = this.dbService.films
	}

	async createFilms(params: { data: Prisma.FilmsCreateInput }): Promise<Films> {
		try {
			const { data } = params
			return this.filmsRepository.create({ data })
		} catch (error) {
			console.log('create films error:', error)
		}
	}

	async getFilms(params: {
		skip?: number
		take?: number
		cursor?: Prisma.FilmsWhereUniqueInput
		where?: Prisma.FilmsWhereInput
		orderBy?: Prisma.FilmsOrderByWithRelationInput
	}): Promise<Films[]> {
		try {
			const { skip, take, cursor, where, orderBy } = params
			return this.filmsRepository.findMany({
				skip,
				take,
				cursor,
				where,
				orderBy,
			})
		} catch (error) {
			console.log('get films error:', error)
		}
	}

	async updateFilms(params: {
		where: Prisma.FilmsWhereUniqueInput
		data: Prisma.FilmsUpdateInput
	}): Promise<Films> {
		try {
			const { where, data } = params
			return this.filmsRepository.update({ where, data })
		} catch (error) {
			console.log('update films error:', error)
		}
	}

	async deleteFilms(params: { where: Prisma.FilmsWhereUniqueInput }): Promise<void> {
		try {
			const { where } = params
			this.filmsRepository.delete({ where })
		} catch (error) {
			console.log('delete films error:', error)
		}
	}
}
