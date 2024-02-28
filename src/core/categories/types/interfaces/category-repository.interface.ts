import { Category, Prisma } from '@prisma/client'

export interface ICategoryRepository {
	createCategory(params: { data: Prisma.CategoryCreateInput }): Promise<Category>
	getCategory(params: {
		skip?: number
		take?: number
		cursor?: Prisma.CategoryWhereUniqueInput
		where?: Prisma.CategoryWhereInput
		orderBy?: Prisma.CategoryOrderByWithRelationInput
	}): Promise<Category[]>
	updateCategory(params: {
		where: Prisma.CategoryWhereUniqueInput
		data: Prisma.CategoryUpdateInput
	}): Promise<Category>
	deleteCategory(params: { where: Prisma.CategoryWhereUniqueInput }): Promise<void>
}
