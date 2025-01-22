import { Module } from '@nestjs/common';
import { BasicCalculationsService } from './basic-calculations.service';
import { BasicCalculationsController } from './basic-calculations.controller';

@Module({
  controllers: [BasicCalculationsController],
  providers: [BasicCalculationsService],
})
export class BasicCalculationsModule {}
