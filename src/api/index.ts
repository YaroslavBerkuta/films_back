import { ADMINS_API } from './admin'
import { CLIENTS_API } from './client'
import { FilesModule } from './files/files.module'

export const API_MODULES = [...CLIENTS_API, ...ADMINS_API, FilesModule.forRoot()]
