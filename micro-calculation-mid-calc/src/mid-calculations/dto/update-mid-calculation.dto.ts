import { PartialType } from '@nestjs/mapped-types';
import { CreateMidCalculationDto } from './create-mid-calculation.dto';

export class UpdateMidCalculationDto extends PartialType(CreateMidCalculationDto) {}
