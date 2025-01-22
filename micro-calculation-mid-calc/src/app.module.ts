import { Module } from '@nestjs/common';
import { MidCalculationsModule } from './mid-calculations/mid-calculations.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MidCalculationsModule,
  ],
})
export class AppModule {}
