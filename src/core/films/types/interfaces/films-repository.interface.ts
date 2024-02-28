import { FilmInfo, Films, Prisma } from '@prisma/client'
export interface IFilmsRepository {
	createFilms(params: { data: Prisma.FilmsCreateInput }): Promise<Films>
	getFilms(params: {
		skip?: number
		take?: number
		cursor?: Prisma.FilmsWhereUniqueInput
		where?: Prisma.FilmsWhereInput
		orderBy?: Prisma.FilmsOrderByWithRelationInput
	}): Promise<Films[]>
	updateFilms(params: {
		where: Prisma.FilmsWhereUniqueInput
		data: Prisma.FilmsUpdateInput
	}): Promise<Films>
	deleteFilms(params: { where: Prisma.FilmsWhereUniqueInput }): Promise<void>
}

export interface IFilmInfoRepository {
	createFilmInfo(params: { data: Prisma.FilmInfoCreateInput }): Promise<FilmInfo>
	getFilmInfo(params: {
		skip?: number
		take?: number
		cursor?: Prisma.FilmInfoWhereUniqueInput
		where?: Prisma.FilmInfoWhereInput
		orderBy?: Prisma.FilmInfoOrderByWithRelationInput
	}): Promise<FilmInfo[]>
	updateFilmInfo(params: {
		where: Prisma.FilmInfoWhereUniqueInput
		data: Prisma.FilmInfoUpdateInput
	}): Promise<FilmInfo>
	deleteFilmInfo(params: { where: Prisma.FilmInfoWhereUniqueInput }): Promise<void>
}
