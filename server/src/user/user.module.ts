import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { RolEntity } from 'src/rol/entity/rol.entity';
import { ProfileEntity } from 'src/profile/entity/profile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, RolEntity, ProfileEntity])],
  controllers: [],
  exports: [],
  providers: [],
})
export class UserModule {}