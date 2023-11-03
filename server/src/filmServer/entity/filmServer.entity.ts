import { FilmEntity } from "src/film/entity/film.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('tbl_filmServer')

export class FilmserverEntity {

    @PrimaryGeneratedColumn({
        name: 'codFilmServer',
        type: 'int'
    })
    Id_FilmServer: number

    @Column({
        name: 'name',
        type: 'varchar',
        nullable: false,
        length: 30
    })
    name: string

    @Column({
        name: 'quality',
        type: 'varchar',
        nullable: false,
        length: 10
    })
    quality: string

    @Column({
        name: 'audio',
        type: 'varchar',
        nullable: false,
        length: 10
    })
    audio: string

    @ManyToOne(() => FilmEntity, (film: FilmEntity) => film.filmServer, {"cascade": true})
    film: FilmEntity
}
