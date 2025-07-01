import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { IUserRepository } from 'src/domain/user/user.repository';
import { User } from 'src/domain/user/user.entity';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) return null;

    return new User(user.id, user.email, user.password);
  }

  async create(user: User): Promise<User> {
    const newUser = this.userRepository.create({
      email: user.email,
      password: user.password,
    });
    const savedUser = await this.userRepository.save(newUser);
    return new User(savedUser.id, savedUser.email, savedUser.password);
  }
}
