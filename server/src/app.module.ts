import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import config from './config';
import * as Joi from 'joi';
import { ProfileModule } from './profile/profile.module';
import { ProfileEntity } from './profile/entity/profile.entity';
import { CategoryEntity } from './category/entity/category.entity';
import { UserEntity } from './user/entity/user.entity';
import { RolEntity } from './rol/entity/rol.entity';
import { FilserverEntity } from './filmServer/entity/filmServer.entity';
import { FilmEntity } from './film/entity/film.entity';
import { PhotoEntity } from './photo/entity/photo.entity';
import { CategoryFilm } from './categoryFilm/entity/categoryFilm.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'prueba',
      entities: [],
      synchronize: false,
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
