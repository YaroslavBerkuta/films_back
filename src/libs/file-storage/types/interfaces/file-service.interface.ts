import { UploadApiErrorResponse, UploadApiResponse } from 'cloudinary'

export interface ICloudDinaryService {
	uploadImage(file: Express.Multer.File): Promise<CloudinaryResponse>
}

export interface IFileService {
	uploadImageToCloudinary(file: Express.Multer.File): Promise<CloudinaryResponse>
}

export type CloudinaryResponse = UploadApiResponse | UploadApiErrorResponse
