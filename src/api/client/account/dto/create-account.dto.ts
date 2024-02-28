import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, IsStrongPassword } from 'class-validator'

export class CreateAccountDto {
	@IsNotEmpty({ message: 'Email не має бути порожнім' })
	@IsEmail({}, { message: 'Не валідний email' })
	email: string

	@IsString({ message: "Ім'я має бути строкою" })
	name: string

	@IsNotEmpty({ message: 'Пароль не має бути порожнім' })
	@IsString()
	@IsStrongPassword(
		{ minLength: 6, minUppercase: 0, minSymbols: 0 },
		{ message: 'Не валідний пароль' },
	)
	password: string

	@IsNotEmpty({ message: 'Телефон не має бути порожнім' })
	@IsString()
	@IsPhoneNumber(null, { message: 'Не валідний номер телефону' })
	phoneNumber: string
}
