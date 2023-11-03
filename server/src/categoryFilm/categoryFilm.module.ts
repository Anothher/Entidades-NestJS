import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoryFilmEntity } from "./entity/categoryFilm.entity";
import { CategoryEntity } from "src/category/entity/category.entity";
import { FilmEntity } from "src/film/entity/film.entity";

@Module({
    imports: [TypeOrmModule.forFeature([CategoryFilmEntity, CategoryEntity, FilmEntity])],
    controllers: [],
    exports: [],
    providers: [],
  })
  export class CategoryFilmModule {}