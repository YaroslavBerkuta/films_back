import { BadRequestException, Inject, Injectable } from '@nestjs/common'
import { CLOUDINARY_SERVICE, ICloudDinaryService, IFileService } from '../types'
import { ILogger, LOGGER_SERVICE } from 'src/libs/logger/types'

@Injectable()
export class FileStorageService implements IFileService {
	@Inject(LOGGER_SERVICE) private readonly logger: ILogger
	@Inject(CLOUDINARY_SERVICE) private readonly cloudinaryService: ICloudDinaryService

	public async uploadImageToCloudinary(file: Express.Multer.File) {
		try {
			if (!file) {
				throw new BadRequestException('file not found')
			}
			return await this.cloudinaryService.uploadImage(file)
		} catch (error) {
			this.logger.errorLog(error.message)
		}
	}
}
