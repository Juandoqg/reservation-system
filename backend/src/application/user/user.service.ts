import { Injectable, Inject } from '@nestjs/common';
import { IUserRepository } from 'src/domain/user/user.repository';
import { User } from 'src/domain/user/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @Inject('IUserRepository') // Este token debe coincidir
    private readonly userRepository: IUserRepository,
  ) {}

  async create(email: string, password: string): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User(0,email, hashedPassword); 
    return this.userRepository.create(user);
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userRepository.findByEmail(email);
  }
}
