import {
  Controller,
  Get, Param
} from '@nestjs/common';
import { CalculationsService } from './calculations.service';

@Controller('calculations')
export class CalculationsController {
  constructor(private readonly calculationsService: CalculationsService) {}

  @Get(':value')
  findOne(@Param('value') value: number) {
    return this.calculationsService.doCalculations(+value);
  }
}
