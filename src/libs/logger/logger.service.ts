import { Injectable, OnModuleInit } from '@nestjs/common'
import * as fs from 'fs'
import { ILogger } from './types'
import * as moment from 'moment'

@Injectable()
export class LoggerService implements ILogger, OnModuleInit {
	private readonly logFileDir = './logs/'
	async onModuleInit() {
		if (!fs.existsSync(this.logFileDir)) {
			fs.mkdirSync(this.logFileDir, { recursive: true })
		}
	}

	private writeToLogFile(message: string, logFileName: string): void {
		const timestamp = moment().format('MMMM Do YYYY, h:mm:ss a')
		const logMessage = `${timestamp}: ${message}\n`
		fs.appendFile(this.logFileDir + logFileName, logMessage, err => {
			if (err) {
				console.error('Error writing to log file:', err)
			}
		})
	}

	log(message: string): void {
		this.writeToLogFile(message, 'logs.txt')
	}

	errorLog(message: string): void {
		this.writeToLogFile(message, 'errorLogs.txt')
	}

	httpLog(message: string): void {
		this.writeToLogFile(message, 'httpLogs.txt')
	}
}
