import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CalculationsModule } from './calculations/calculations.module';

@Module({
  imports: [CalculationsModule],
})
export class AppModule {}
