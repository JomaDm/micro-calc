import { Injectable } from '@nestjs/common';

@Injectable()
export class ComplexCalculationService {
  factors(value: number) {
    const factors: Set<number> = new Set<number>();

    for (let i = 1; i <= Math.round(Math.sqrt(value)) + 1; i++) {
      if (value % i == 0) {
        factors.add(i);
        if (i != Math.round(value / i)) {
          factors.add(Math.round(value / i));
        }
      }
    }

    return [...factors].sort((a, b) => a - b);
  }

  fibonacci(value: number): number {
    if (value === 0) {
      return 0;
    } else if (value === 1) {
      return 1;
    } else {
      return this.fibonacci(value - 1) + this.fibonacci(value - 2);
    }
  }

  factorial(value: number): number {
    if (value === 0) {
      return 1;
    } else {
      return value * this.factorial(value - 1);
    }
  }
}
