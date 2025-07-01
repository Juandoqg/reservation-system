import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReservationEntity } from './reservation.entity';
import { IReservationRepository } from 'src/domain/reservation/reservation.repository';
import { Reservation } from 'src/domain/reservation/reservation.entity';

@Injectable()
export class ReservationRepository implements IReservationRepository {
  constructor(
    @InjectRepository(ReservationEntity)
    private readonly repository: Repository<ReservationEntity>,
  ) {}

  async create(reservation: Reservation): Promise<Reservation> {
    const newReservation = this.repository.create({
      date: reservation.date,
      time: reservation.time,
      people: reservation.people,
      user: { id: reservation.userId } as any, // Relacionamos con el usuario
    });
    const savedReservation = await this.repository.save(newReservation);

    return new Reservation(
      savedReservation.id,
      savedReservation.date,
      savedReservation.time,
      savedReservation.people,
      savedReservation.user.id,
    );
  }

  async findAll(): Promise<Reservation[]> {
    const reservations = await this.repository.find({ relations: ['user'] });
    return reservations.map(r => new Reservation(r.id, r.date, r.time, r.people, r.user.id));
  }

  async findByUserId(userId: number): Promise<Reservation[]> {
    const reservations = await this.repository.find({
      where: { user: { id: userId } },
      relations: ['user'],
    });
    return reservations.map(r => new Reservation(r.id, r.date, r.time, r.people, r.user.id));
  }
}
