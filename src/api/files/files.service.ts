import { Inject, Injectable } from '@nestjs/common'
import { FILE_SERVICE, IFileService } from 'src/libs/file-storage/types'

@Injectable()
export class FilesService {
	@Inject(FILE_SERVICE) private readonly fileService: IFileService

	public async uploadImage(image: Express.Multer.File) {
		return this.fileService.uploadImageToCloudinary(image)
	}
}
