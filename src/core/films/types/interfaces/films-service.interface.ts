import { Films } from '@prisma/client'

export interface IFilmsService {
	create(payload: ICreateFilmPayload): Promise<Films>
}

export interface ICreateFilmPayload {
	name: string
	ratings: number
	slogan: string
	releaseDate: string
	country: string
	director: string
	quality: string
	time: string
	descriptions: string
}
