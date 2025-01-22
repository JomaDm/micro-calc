import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class CalculationsService {
  constructor(
    @Inject('BASIC_CALCULATIONS_SERVICE')
    private readonly basicCalculationClient: ClientProxy,
    @Inject('MID_CALCULATIONS_SERVICE')
    private readonly midCalculationClient: ClientProxy,
  ) {}

  async doCalculations(value: number) {
    return {
      ...(await this.basicCalculationClient
        .send('isPair', { value })
        .toPromise()),
      ...(await this.basicCalculationClient.send('sum', { value }).toPromise()),
      ...(await this.midCalculationClient
        .send('isPrime', { value })
        .toPromise()),
      ...(await this.midCalculationClient
        .send('fibonacci', { value })
        .toPromise()),
      ...(await this.midCalculationClient
        .send('factorial', { value })
        .toPromise()),
    };
  }
}
