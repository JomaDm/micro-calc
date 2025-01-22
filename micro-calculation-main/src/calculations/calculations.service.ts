import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class CalculationsService {
  constructor(
    @Inject('BASIC_CALCULATIONS_SERVICE')
    private readonly basicCalculationClient: ClientProxy,
    @Inject('MID_CALCULATIONS_SERVICE')
    private readonly midCalculationClient: ClientProxy,
    @Inject('COMPLEX_CALCULATIONS_SERVICE')
    private readonly complexCalculationClient: ClientProxy,
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
      ...(await this.complexCalculationClient
        .send('fibonacci', { value })
        .toPromise()),
      ...(await this.complexCalculationClient
        .send('factorial', { value })
        .toPromise()),
      ...(await this.complexCalculationClient
        .send('factors', { value })
        .toPromise()),
    };
  }
}
