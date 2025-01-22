import { Module } from '@nestjs/common';
import { ComplexCalculationService } from './complex-calculation.service';
import { ComplexCalculationController } from './complex-calculation.controller';

@Module({
  controllers: [ComplexCalculationController],
  providers: [ComplexCalculationService],
})
export class ComplexCalculationModule {}
