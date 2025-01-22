import { Controller } from '@nestjs/common';
import { MidCalculationsService } from './mid-calculations.service';
import { MessagePattern } from '@nestjs/microservices';

interface Data {
  value: number;
}
@Controller('mid-calculations')
export class MidCalculationsController {
  constructor(
    private readonly midCalculationsService: MidCalculationsService,
  ) {}

  @MessagePattern('isPrime')
  isPrime(data: Data) {
    return {
      isPrime: this.midCalculationsService.isPrime(data.value),
    };
  }
  
}
