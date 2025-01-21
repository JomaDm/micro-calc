import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class CalculationsService {
  constructor(
    @Inject('CALCULATIONS_SERVICE')
    private readonly calculationClient: ClientProxy,
  ) {}
  async doCalculations(number: number) {
    return { isPair: await this.calculationClient.send('pairing', number) };
  }
}
