export interface ICloudDinaryService {}

export interface IFileService {}

export interface IUploadFilePayload {
	chunk: Express.Multer.File
	chunkIndex: number
	totalChunks: number
}
