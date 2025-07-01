import { User } from '../../domain/user/user.entity';
import { UserEntity } from './user.entity';

export class UserMapper {
  static toDomain(entity: UserEntity): User {
    return new User(entity.id, entity.email, entity.password, entity.role);
  }

  static toEntity(user: User): UserEntity {
    const entity = new UserEntity();
    entity.id = user.id;
    entity.email = user.email;
    entity.password = user.password;
    entity.role = user.role;
    return entity;
  }
}
