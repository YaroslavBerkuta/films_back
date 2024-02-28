import { Injectable } from '@nestjs/common'
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserCryptoService {
	protected async hashPassword(pass: string, round: number = 10): Promise<{ newPass: string }> {
		try {
			const newPass = await bcrypt.hashSync(pass, round)

			return {
				newPass,
			}
		} catch (error) {
			console.log('error hashPassword:', error.message)
		}
	}

	protected async comparePass(password: string, hash: string): Promise<boolean> {
		try {
			const exist = await bcrypt.compareSync(password, hash)
			console.log('compare:', exist)
			return exist
		} catch (error) {
			console.log('error comparePass:', error.message)
		}
	}
}
