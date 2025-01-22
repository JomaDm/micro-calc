import { Injectable } from '@nestjs/common';
import { CreateMidCalculationDto } from './dto/create-mid-calculation.dto';
import { UpdateMidCalculationDto } from './dto/update-mid-calculation.dto';

@Injectable()
export class MidCalculationsService {
  isPrime(value) {
    let count = 0;
    for (let i = 1; i <= value; i++) {
      if (value % i === 0) {
        count++;
      }
    }
    return count <= 2;
  }

  fibonacci(value) {
    if (value === 0) {
      return 0;
    } else if (value === 1) {
      return 1;
    } else {
      return this.fibonacci(value - 1) + this.fibonacci(value - 2);
    }
  }

  factorial(value) {
    if (value === 0) {
      return 1;
    } else {
      return value * this.factorial(value - 1);
    }
  }
}
