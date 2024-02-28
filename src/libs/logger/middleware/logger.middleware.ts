import { Inject, Injectable, NestMiddleware } from '@nestjs/common'
import { Request, Response, NextFunction } from 'express'
import { ILogger, LOGGER_SERVICE } from 'src/libs/logger/types'

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
	@Inject(LOGGER_SERVICE) private readonly logger: ILogger

	use(req: Request, res: Response, next: NextFunction) {
		this.logger.httpLog(`Logging HTTP request ${req.method} ${req.url} ${res.statusCode}`)
		next()
	}
}
