import { Controller, Post, UseInterceptors } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { FilesService } from './files.service'

@Controller('files')
export class FilesController {
	constructor(private readonly fileService: FilesService) {}

	@Post('upload')
	@UseInterceptors(FileInterceptor('chunk'))
	uploadImage() {
		return
	}
}
