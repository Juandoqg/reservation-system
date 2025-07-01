import { Controller, Post, Body, UseGuards, Request, Get } from '@nestjs/common';
import { ReservationService } from 'src/application/reservation/reservation.service';
import { JwtAuthGuard } from 'src/infrastructure/auth/jwt-auth.guard';
import { Reservation } from 'src/domain/reservation/reservation.entity';

@Controller('reservations')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async createReservation(
    @Request() req,
    @Body() body: { date: string; time: string; people: number }
  ): Promise<Reservation> {
    const userId = req.user.userId;

    const reservation = new Reservation(
      0, 
      body.date,
      body.time,
      body.people,
      userId
    );

    return this.reservationService.create(reservation);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getUserReservations(@Request() req): Promise<Reservation[]> {
    const userId = req.user.userId;
    return this.reservationService.findByUserId(userId);
  }
}
