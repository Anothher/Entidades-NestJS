import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tbl_rol')
export class RolEntity {

    @PrimaryGeneratedColumn({
        name: 'codRole',
        type: 'int'
    })
    id_rol: number

    @Column({
        name: 'descripcion',
        type: 'varchar',
        nullable: false,
        length: '200'
    })
    descripcion: string
}