import { CategoryEntity } from "src/category/entity/category.entity";
import { FilmserverEntity } from "src/filmServer/entity/filmServer.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('tbl_film')
export class FilmEntity{
    @PrimaryGeneratedColumn({
        name: 'codfilm',
        type: 'int'  
    })
    id_film: string

    @Column({
        name: 'name',
        type: 'varchar',
        nullable: false,
        length: 60
    })
    name: string

    @Column({
        name: 'year',
        type: 'int',
        nullable: false
    })
    year: Date

    @Column({
        name: 'description',
        type: 'varchar',
        nullable: false,
        length: 200
    })
    description: string

    @OneToOne(() => CategoryEntity, (category: CategoryEntity) => category.id_category)
    @JoinColumn({name: 'codCategory'})
    category: CategoryEntity

    @OneToMany(() => FilmserverEntity, (filmServer: FilmserverEntity) => filmServer.Id_FilmServer)
    @JoinColumn({name: 'codFilmServer'})
    filmServer: FilmserverEntity

}