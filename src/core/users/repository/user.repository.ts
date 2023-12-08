import { Inject, Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { DatabaseService } from 'src/libs/database/database.service';
import { DB_SERVICE } from 'src/libs/database/types';
import { IUserRepository } from '../types/interfaces';

@Injectable()
export class UserRepository implements IUserRepository {
  private readonly userRepo: Prisma.UserDelegate;
  constructor(@Inject(DB_SERVICE) private readonly dbService: DatabaseService) {
    this.userRepo = this.dbService.user;
  }

  async createUser(params: { data: Prisma.UserCreateInput }): Promise<User> {
    const { data } = params;
    return this.userRepo.create({ data });
  }

  async getUser(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.userRepo.findMany({ skip, take, cursor, where, orderBy });
  }

  async updateUser(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    const { where, data } = params;
    return this.userRepo.update({ where, data });
  }

  async deleteUser(params: {
    where: Prisma.UserWhereUniqueInput;
  }): Promise<void> {
    const { where } = params;
    this.userRepo.delete({ where });
  }
}
