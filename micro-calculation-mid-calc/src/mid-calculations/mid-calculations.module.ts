import { Module } from '@nestjs/common';
import { MidCalculationsService } from './mid-calculations.service';
import { MidCalculationsController } from './mid-calculations.controller';

@Module({
  controllers: [MidCalculationsController],
  providers: [MidCalculationsService],
})
export class MidCalculationsModule {}
