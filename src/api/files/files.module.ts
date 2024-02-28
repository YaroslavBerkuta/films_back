import { DynamicModule, Module } from '@nestjs/common'
import { FileStorageModule } from 'src/libs/file-storage/file-storage.module'
import { FilesService } from './files.service'
import { FilesController } from './files.controller'

@Module({})
export class FilesModule {
	static forRoot(): DynamicModule {
		return {
			module: FilesModule,
			controllers: [FilesController],
			providers: [FilesService],
			imports: [FileStorageModule.forFeature()],
		}
	}
}
