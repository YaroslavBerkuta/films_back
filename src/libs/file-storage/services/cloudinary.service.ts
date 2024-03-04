import { Inject, Injectable } from '@nestjs/common'
import * as cloudinary from 'cloudinary'
import { CLOUDINARY_OPTIONS, ICloudDinaryOptions, ICloudDinaryService } from '../types'

@Injectable()
export class CloudinaryService implements ICloudDinaryService {
	constructor(
		@Inject(CLOUDINARY_OPTIONS) private readonly cloudinaryOption: ICloudDinaryOptions,
	) {
		cloudinary.v2.config({
			cloud_name: this.cloudinaryOption.cloud_name,
			api_key: this.cloudinaryOption.api_key,
			api_secret: this.cloudinaryOption.api_secret,
		})
	}
}
