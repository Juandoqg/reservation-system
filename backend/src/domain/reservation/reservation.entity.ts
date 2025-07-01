export class Reservation {
  constructor(
    public readonly id: number,
    public readonly date: string,
    public readonly time: string,
    public readonly people: number,
    public readonly userId: number,
  ) {}
}
