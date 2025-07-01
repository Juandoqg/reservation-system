import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/infrastructure/user/user.entity';
import { UserService } from 'src/application/user/user.service';
import { UserRepository } from 'src/infrastructure/user/typeorm-user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])], 
  providers: [
    UserService,
    {
      provide: 'IUserRepository',  
      useClass: UserRepository,
    },
  ],
  exports: [UserService], 
})
export class UserModule {}
