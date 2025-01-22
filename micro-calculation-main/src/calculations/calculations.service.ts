import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class CalculationsService {
  constructor(
    @Inject('CALCULATIONS_SERVICE')
    private readonly calculationClient: ClientProxy,
  ) {}

  async doCalculations(value: number) {
    return {
      ...await this.calculationClient
        .send('isPair', { value })
        .toPromise(),
      ...await this.calculationClient
        .send('sum', { value })
        .toPromise(),
      
    };
  }
}
