import { Controller, Post, Body, UseGuards, Get, Request } from '@nestjs/common';
import { AuthService } from 'src/application/auth/auth.service';
import { JwtAuthGuard } from 'src/infrastructure/auth/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}


   @Post('register')
  async register(@Body() body: { email: string; password: string }) {
    const { email, password } = body;
    return this.authService.register(email, password);
  }

  @Post('login')
  async login(@Body() body: { email: string, password: string }) {
    return this.authService.login(body.email, body.password);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user; 
  }
}
