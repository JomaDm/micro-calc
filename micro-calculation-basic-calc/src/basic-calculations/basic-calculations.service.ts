import { Injectable } from '@nestjs/common';

@Injectable()
export class BasicCalculationsService {
  isPair(number: number): boolean {
    return number % 2 == 0;
  }
  sum(number: number): number {
    return (number * (number + 1)) / 2;
  }
}
