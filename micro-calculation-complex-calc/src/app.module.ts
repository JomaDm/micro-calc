import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ComplexCalculationModule } from './complex-calculation/complex-calculation.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ComplexCalculationModule,
  ],
})
export class AppModule {}
