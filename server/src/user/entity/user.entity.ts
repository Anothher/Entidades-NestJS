import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('tbl_user')
export class UserEntity {

    @PrimaryColumn({
        name: 'codUser',
        type: 'int',
        nullable: false,
    })
    id_user: number

    @Column({
        name: 'userName',
        type: 'varchar',
        nullable: false,
        length: 50
    })
    name: string

    @Column({
        name: 'password',
        type: 'varchar',
        nullable: false,
        length: 40
    })
    password: string

    @Column({
        name: 'state',
        type: 'boolean',
        nullable: false
    })
    state: boolean

}