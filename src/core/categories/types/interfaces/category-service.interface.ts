import { Category, CategoryType } from '@prisma/client'

export interface ICategoryService {
	create(payload: ICreateCategoryPayload): Promise<Category>
	update(id: number, payload: IUpdateCategoryPayload): Promise<Category>
	delete(id: number): Promise<void>
}
export interface IUpdateCategoryPayload {
	title?: string
	type?: CategoryType
}
export interface ICreateCategoryPayload {
	title: string
	type: CategoryType
}
