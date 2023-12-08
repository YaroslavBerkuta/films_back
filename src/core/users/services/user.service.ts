import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UserCryptoService } from './user-crypto.service';
import { IUser, IUserRepository, IUserService } from '../types/interfaces';
import { USER_REPOSITORY } from '../types';

@Injectable()
export class UserService extends UserCryptoService implements IUserService {
  @Inject(USER_REPOSITORY) private readonly userRepo: IUserRepository;

  private async isExistByEmail(email: string): Promise<boolean> {
    try {
      const existingUsers = await this.userRepo.getUser({
        where: { email },
      });

      if (existingUsers.length > 0) {
        return true;
      }

      return false;
    } catch (error) {
      console.error(
        'Ошибка проверки существующего пользователя по электронной почте:',
        error.message,
      );
      return false;
    }
  }

  public async create(payload: Prisma.UserCreateInput): Promise<IUser> {
    try {
      const isExist = await this.isExistByEmail(payload.email);

      if (isExist) {
        throw new BadRequestException('Пользователь уже существует');
      }

      const { newPass } = await this.hashPassword(payload.password);

      const user = await this.userRepo.createUser({
        data: {
          ...payload,
          password: newPass,
        },
      });
      return user;
    } catch (error) {
      console.error('Ошибка создания пользователя:', error.message);
      throw new BadRequestException('Ошибка создания пользователя');
    }
  }
}
