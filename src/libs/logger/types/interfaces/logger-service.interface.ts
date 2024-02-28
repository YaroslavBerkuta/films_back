export interface ILogger {
	log(message: string): void
	httpLog(message: string): void
	errorLog(message: string): void
}
