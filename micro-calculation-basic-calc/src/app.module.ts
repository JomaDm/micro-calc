import { Module } from '@nestjs/common';
import { BasicCalculationsModule } from './basic-calculations/basic-calculations.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    BasicCalculationsModule,
  ],
})
export class AppModule {}
