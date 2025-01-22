import { Controller } from '@nestjs/common';
import { ComplexCalculationService } from './complex-calculation.service';
import { MessagePattern } from '@nestjs/microservices';

interface Data {
  value: number;
}
@Controller('complex-calculation')
export class ComplexCalculationController {
  constructor(
    private readonly complexCalculationService: ComplexCalculationService,
  ) {}

  @MessagePattern('factors')
  factors(data: Data) {
    return {
      factors: this.complexCalculationService.factors(data.value),
    };
  }

  @MessagePattern('fibonacci')
  fibonacci(data: Data) {
    return {
      fibonacci: this.complexCalculationService.fibonacci(data.value),
    };
  }
  @MessagePattern('factorial')
  factorial(data: Data) {
    return {
      factorial: this.complexCalculationService.factorial(data.value),
    };
  }
}
