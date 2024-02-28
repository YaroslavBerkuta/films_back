import { DynamicModule, Module, Provider } from '@nestjs/common'
import { MulterModule } from '@nestjs/platform-express'
import { memoryStorage } from 'multer'
import { CLOUDINARY_OPTIONS, CLOUDINARY_SERVICE, FILE_SERVICE, ICloudDinaryOptions } from './types'
import { CloudinaryService, FileStorageService } from './services'

@Module({})
export class FileStorageModule {
	static options: ICloudDinaryOptions

	static getProviders(): Provider[] {
		return [
			{ provide: CLOUDINARY_OPTIONS, useValue: this.options },
			{ provide: CLOUDINARY_SERVICE, useClass: CloudinaryService },
			{ provide: FILE_SERVICE, useClass: FileStorageService },
		]
	}

	static imports() {
		return [
			MulterModule.register({
				storage: memoryStorage(),
			}),
		]
	}

	static forRoot(options: ICloudDinaryOptions): DynamicModule {
		FileStorageModule.options = options
		return {
			module: FileStorageModule,
			providers: this.getProviders(),
			imports: this.imports(),
		}
	}

	static forFeature(): DynamicModule {
		return {
			module: FileStorageModule,
			providers: this.getProviders(),
			imports: this.imports(),
			exports: [FILE_SERVICE],
		}
	}
}
