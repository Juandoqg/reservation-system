import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from 'src/application/auth/auth.service';
import { UserModule } from '../user/user.module';
import { AuthController } from 'src/interfaces/auth/auth.controller';
import { JwtStrategy } from 'src/infrastructure/auth/jwt.strategy';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: 'JWT_SECRET_KEY', 
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
