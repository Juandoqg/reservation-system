import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

    async register(email: string, password: string) {
    const user = await this.userService.create(email, password);
    return { message: 'Usuario creado correctamente', user };
  }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findByEmail(email);
    if (user && await bcrypt.compare(password, user.password)) {
      return { id: user.id, email: user.email };
    }
    throw new UnauthorizedException('Invalid credentials');
  }

  async login(email: string, password: string) {
    const user = await this.validateUser(email, password);
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
