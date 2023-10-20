import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tbl_filmServer')

export class FilserverEntity {

    @PrimaryGeneratedColumn({
        name: 'codFilmServer',
        type: 'int'
    })
    Id_FilmServer: string

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
}