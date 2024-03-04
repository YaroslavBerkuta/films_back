import { Inject, Injectable } from '@nestjs/common'
import { CLOUDINARY_SERVICE, ICloudDinaryService, IFileService } from '../types'
import { ILogger, LOGGER_SERVICE } from 'src/libs/logger/types'

@Injectable()
export class FileStorageService implements IFileService {
	@Inject(LOGGER_SERVICE) private readonly logger: ILogger
	@Inject(CLOUDINARY_SERVICE) private readonly cloudinaryService: ICloudDinaryService

	async upload() {}
}
