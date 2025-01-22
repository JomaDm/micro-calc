import { Controller } from '@nestjs/common';
import { MidCalculationsService } from './mid-calculations.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('mid-calculations')
export class MidCalculationsController {
  constructor(
    private readonly midCalculationsService: MidCalculationsService,
  ) {}

  @MessagePattern('isPrime')
  isPrime(data: any) {
    return {
      isPrime: this.midCalculationsService.isPrime(data.value),
    };
  }
  @MessagePattern('fibonacci')
  fibonacci(data: any) {
    return {
      fibonacci: this.midCalculationsService.fibonacci(data.value),
    };
  }
  @MessagePattern('factorial')
  factorial(data: any) {
    return {
      factorial: this.midCalculationsService.factorial(data.value),
    };
  }
}
