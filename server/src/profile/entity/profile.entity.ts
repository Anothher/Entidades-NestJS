import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('tbl_profile')
export class ProfileEntity {

    @PrimaryColumn({
        name: 'codProfile',
        type: 'int',
        nullable: false,
    })
    id_profile: number

    @Column({
        name: 'name',
        type: 'varchar',
        nullable: false,
        length: 50
    })
    name: string

    @Column({
        name: 'lastname',
        type: 'varchar',
        nullable: false,
        length: 50
    })
    las_name: string


    @Column({
        name: 'email',
        type: 'varchar',
        nullable: false,
        length: 60
    })
    email: string

    @Column({
        name: 'gender',
        type: 'varchar',
        nullable: false,
        length: 11
    })
    genero: string

    @Column({
        name: 'birthdate',
        type: 'date',
        nullable: false,
    })
    birthdate: Date
}
