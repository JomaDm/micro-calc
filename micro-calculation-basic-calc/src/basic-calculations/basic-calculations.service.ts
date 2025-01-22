import { Injectable } from '@nestjs/common';

@Injectable()
export class BasicCalculationsService {
  isPair(number: number) {
    return number % 2 == 0;
  }
  sum(number: number) {
    return (number * (number + 1)) / 2;
  }
}
