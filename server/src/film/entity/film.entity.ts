import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}