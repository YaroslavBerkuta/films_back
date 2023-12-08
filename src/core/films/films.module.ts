import { DynamicModule, Module } from '@nestjs/common';

@Module({})
export class FilmsModule {
  static getProviders() {
    return [];
  }

  static imports() {
    return [];
  }

  static forRoot(): DynamicModule {
    return {
      module: FilmsModule,
      providers: this.getProviders(),
      imports: this.imports(),
    };
  }

  static forFeature(): DynamicModule {
    return {
      module: FilmsModule,
      providers: this.getProviders(),
      imports: this.imports(),
      exports: [],
    };
  }
}
