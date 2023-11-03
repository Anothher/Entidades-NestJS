import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoryEntity } from "./entity/category.entity";
import { PhotoEntity } from "src/photo/entity/photo.entity";

@Module({
    imports: [TypeOrmModule.forFeature([ CategoryEntity,PhotoEntity])],
    controllers: [],
    providers: [],
    exports: []
})

export class CategoryModule { }