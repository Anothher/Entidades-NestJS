import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tbl_CategoryFilm')
export class CategoryFilm {

    @PrimaryGeneratedColumn({
        name: 'categoryFilm',
        type: 'int'
    })
    category_film: string
}