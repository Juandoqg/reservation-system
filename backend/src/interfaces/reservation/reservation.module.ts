// src/interfaces/reservation/reservation.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservationEntity } from 'src/infrastructure/reservation/reservation.entity';
import { ReservationService } from 'src/application/reservation/reservation.service';
import { ReservationRepository } from 'src/infrastructure/reservation/typeorm-reservation.repository';
import { ReservationController } from './reservation.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ReservationEntity])],
  controllers: [ReservationController],
  providers: [
    ReservationService,
    {
      provide: 'IReservationRepository',
      useClass: ReservationRepository,
    },
  ],
  exports: [ReservationService],
})
export class ReservationModule {}
