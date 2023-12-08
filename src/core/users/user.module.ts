import { DynamicModule, Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { USER_REPOSITORY, USER_SERVICE } from './types';
import { UserCryptoService } from './services/user-crypto.service';
import { DatabaseModule } from 'src/libs/database/database.module';
import { UserRepository } from './repository';

@Module({})
export class UserModule {
  static imports() {
    return [DatabaseModule];
  }

  static getProviders() {
    return [
      { provide: USER_SERVICE, useClass: UserService },
      {
        provide: USER_REPOSITORY,
        useClass: UserRepository,
      },
      UserCryptoService,
    ];
  }

  static forRoot(): DynamicModule {
    return {
      module: UserModule,
      providers: this.getProviders(),
      imports: this.imports(),
    };
  }

  static forFeature(): DynamicModule {
    return {
      module: UserModule,
      providers: this.getProviders(),
      imports: this.imports(),
      exports: [USER_REPOSITORY, USER_SERVICE],
    };
  }
}
