import { Reservation } from './reservation.entity';

export interface IReservationRepository {
  create(reservation: Reservation): Promise<Reservation>;
  findAll(): Promise<Reservation[]>;
  findByUserId(userId: number): Promise<Reservation[]>; 
}
