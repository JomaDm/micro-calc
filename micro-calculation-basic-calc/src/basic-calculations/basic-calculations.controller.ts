import { Controller } from '@nestjs/common';
import { BasicCalculationsService } from './basic-calculations.service';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class BasicCalculationsController {
  constructor(
    private readonly basicCalculationsService: BasicCalculationsService,
  ) {}

  @MessagePattern('isPair')
  isPair(data: any) {
    return {
      isPair: this.basicCalculationsService.isPair(data.value),
    };
  }
  @MessagePattern('sum')
  sum(data: any) {
    return {
      sumN: this.basicCalculationsService.sum(data.value),
    };
  }
}
