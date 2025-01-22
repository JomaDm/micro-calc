import { PartialType } from '@nestjs/mapped-types';
import { CreateBasicCalculationDto } from './create-basic-calculation.dto';

export class UpdateBasicCalculationDto extends PartialType(CreateBasicCalculationDto) {}
