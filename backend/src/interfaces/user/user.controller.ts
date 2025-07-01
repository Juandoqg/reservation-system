import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from 'src/application/user/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() body: { email: string; password: string }) {
    return this.userService.create(body.email, body.password);
  }
}
