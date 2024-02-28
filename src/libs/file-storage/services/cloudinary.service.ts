import { BadRequestException, Inject, Injectable } from '@nestjs/common'
import * as cloudinary from 'cloudinary'
import * as streamifier from 'streamifier'
import {
	CLOUDINARY_OPTIONS,
	CloudinaryResponse,
	ICloudDinaryOptions,
	ICloudDinaryService,
} from '../types'
import { UploadApiOptions } from 'cloudinary'

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

	public async uploadImage(
		file: Express.Multer.File,
		options?: UploadApiOptions,
	): Promise<CloudinaryResponse> {
		try {
			return new Promise<CloudinaryResponse>((resolve, reject) => {
				const uploadStream = cloudinary.v2.uploader.upload_stream(
					options,
					(error, result) => {
						if (error) return reject(error)
						resolve(result)
					},
				)

				streamifier.createReadStream(file.buffer).pipe(uploadStream)
			})
		} catch (error) {
			throw new BadRequestException('upload image cloudinary error')
		}
	}
}
