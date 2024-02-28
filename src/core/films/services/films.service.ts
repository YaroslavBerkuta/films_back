import { BadRequestException, Inject, Injectable } from '@nestjs/common'
import {
	FILMS_REPOSITORY,
	FILM_INFO_REPOSITORY,
	ICreateFilmPayload,
	IFilmInfoRepository,
	IFilmsRepository,
	IFilmsService,
} from '../types'
import { Films } from '@prisma/client'

@Injectable()
export class FilmsService implements IFilmsService {
	@Inject(FILMS_REPOSITORY) private readonly filmsRepository: IFilmsRepository
	@Inject(FILM_INFO_REPOSITORY)
	private readonly filmInfoRepository: IFilmInfoRepository

	public async create(payload: ICreateFilmPayload): Promise<Films> {
		try {
			const filmInfo = await this.filmInfoRepository.createFilmInfo({
				data: {
					ratings: payload.ratings,
					slogan: payload.slogan,
					releaseDate: payload.releaseDate,
					country: payload.country,
					director: payload.director,
					quality: payload.quality,
					time: payload.time,
					descriptions: payload.descriptions,
				},
			})
			const film = await this.filmsRepository.createFilms({
				data: {
					name: payload.name,
					views: 0,
					filmInfoId: filmInfo.id,
				},
			})
			return film
		} catch (error) {
			console.log('create film error')
			throw new BadRequestException('create film error')
		}
	}
}
