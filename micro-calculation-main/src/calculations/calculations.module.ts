import { Module } from '@nestjs/common';
import { CalculationsService } from './calculations.service';
import { CalculationsController } from './calculations.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CALCULATIONS_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [
            process.env.NODE_ENV == 'prod'
              ? process.env.RABBIT_URL
              : 'amqp://user:password@localhost:5672',
          ],
          queue: 'calc_queue',
          queueOptions: {
            durable: true,
          },
        },
      },
    ]),
  ],
  controllers: [CalculationsController],
  providers: [CalculationsService],
})
export class CalculationsModule {}
