import { DB_SERVICE } from 'src/libs/database/types'
import { Inject, Injectable } from '@nestjs/common'
import { FilmInfo, Prisma } from '@prisma/client'
import { DatabaseService } from 'src/libs/database/database.service'
import { IFilmInfoRepository } from '../types'

@Injectable()
export class FilmsInfoRepository implements IFilmInfoRepository {
	private readonly filmsInfoRepository: Prisma.FilmInfoDelegate

	constructor(@Inject(DB_SERVICE) private readonly dbService: DatabaseService) {
		this.filmsInfoRepository = this.dbService.filmInfo
	}

	async createFilmInfo(params: { data: Prisma.FilmInfoCreateInput }): Promise<FilmInfo> {
		try {
			const { data } = params
			return this.filmsInfoRepository.create({ data })
		} catch (error) {
			console.log('create films error:', error)
		}
	}

	async getFilmInfo(params: {
		skip?: number
		take?: number
		cursor?: Prisma.FilmInfoWhereUniqueInput
		where?: Prisma.FilmInfoWhereInput
		orderBy?: Prisma.FilmInfoOrderByWithRelationInput
	}): Promise<FilmInfo[]> {
		try {
			const { skip, take, cursor, where, orderBy } = params
			return this.filmsInfoRepository.findMany({
				skip,
				take,
				cursor,
				where,
				orderBy,
			})
		} catch (error) {
			console.log('get film info error:', error)
		}
	}

	async updateFilmInfo(params: {
		where: Prisma.FilmInfoWhereUniqueInput
		data: Prisma.FilmInfoUpdateInput
	}): Promise<FilmInfo> {
		try {
			const { where, data } = params
			return this.filmsInfoRepository.update({ where, data })
		} catch (error) {
			console.log('update film info error:', error)
		}
	}

	async deleteFilmInfo(params: { where: Prisma.FilmInfoWhereUniqueInput }): Promise<void> {
		try {
			const { where } = params
			this.filmsInfoRepository.delete({ where })
		} catch (error) {
			console.log('delete film info error:', error)
		}
	}
}
