import { Controller } from '@nestjs/common';
import { BasicCalculationsService } from './basic-calculations.service';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';

interface Data {
  value: number;
}
@Controller()
export class BasicCalculationsController {
  constructor(
    private readonly basicCalculationsService: BasicCalculationsService,
  ) {}

  @MessagePattern('isPair')
  isPair(data: Data) {
    return {
      isPair: this.basicCalculationsService.isPair(data.value),
    };
  }
  @MessagePattern('sum')
  sum(data: Data) {
    return {
      sumN: this.basicCalculationsService.sum(data.value),
    };
  }
}
