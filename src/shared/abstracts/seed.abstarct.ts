import { Logger, OnModuleInit } from '@nestjs/common'

export abstract class Seeder implements OnModuleInit {
	protected abstract name: string
	protected abstract seed(): void | Promise<void>
	private logger: Logger
	constructor() {
		this.logger = new Logger()
	}
	private async run() {
		try {
			await this.seed()
		} catch (e) {
			this.logger.warn(e)
		}
	}
	public onModuleInit() {
		this.logger.log(this.name)
		this.run()
	}
}
