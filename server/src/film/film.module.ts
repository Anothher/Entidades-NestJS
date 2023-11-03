import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FilmEntity } from "./entity/film.entity";
import { CategoryEntity } from "src/category/entity/category.entity";
import { FilmserverEntity } from "src/filmServer/entity/filmServer.entity";

@Module({
    imports: [TypeOrmModule.forFeature([FilmEntity, CategoryEntity,FilmserverEntity])],
    controllers: [],
    exports: [],
    providers: [],
  })
  export class UserModule {}