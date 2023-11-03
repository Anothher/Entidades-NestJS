import { CategoryEntity } from "src/category/entity/category.entity";
import { FilmEntity } from "src/film/entity/film.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('tbl_CategoryFilm')
export class CategoryFilmEntity {

    @PrimaryGeneratedColumn({
        name: 'codCategoryFilm',
        type: 'int'
    })
    id_category_Film: number

    @OneToOne(() => CategoryEntity, (category: CategoryEntity)=> category.id_category)
    @JoinColumn({name: 'codCategory'})
    category: CategoryEntity

    @OneToOne(() => FilmEntity, (film: FilmEntity) => film.id_film)
    @JoinColumn({ name: 'codfilm'})
    film: FilmEntity
}
