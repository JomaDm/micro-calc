import { PartialType } from '@nestjs/mapped-types';
import { CreateComplexCalculationDto } from './create-complex-calculation.dto';

export class UpdateComplexCalculationDto extends PartialType(CreateComplexCalculationDto) {}
