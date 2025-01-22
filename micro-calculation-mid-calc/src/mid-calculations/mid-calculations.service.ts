import { Injectable } from '@nestjs/common';
import { CreateMidCalculationDto } from './dto/create-mid-calculation.dto';
import { UpdateMidCalculationDto } from './dto/update-mid-calculation.dto';

@Injectable()
export class MidCalculationsService {
  isPrime(value: number): boolean {
    let count = 0;
    for (let i = 1; i <= value; i++) {
      if (value % i === 0) {
        count++;
      }
    }
    return count <= 2;
  }
}
