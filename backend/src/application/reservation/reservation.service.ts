import { Injectable, Inject } from '@nestjs/common'; // Faltaba importar Inject
import { IReservationRepository } from 'src/domain/reservation/reservation.repository';
import { Reservation } from 'src/domain/reservation/reservation.entity';

@Injectable()
export class ReservationService {
  constructor(
    @Inject('IReservationRepository') // Correcto
    private readonly reservationRepository: IReservationRepository
  ) {}

  async create(reservation: Reservation): Promise<Reservation> {
    return this.reservationRepository.create(reservation);
  }

  async findAll(): Promise<Reservation[]> {
    return this.reservationRepository.findAll();
  }
   async findByUserId(userId: number): Promise<Reservation[]> {
    return this.reservationRepository.findByUserId(userId);
  }
}
