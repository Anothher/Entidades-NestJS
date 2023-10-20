import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tbl_category')
export class CategoryEntity{

    @PrimaryGeneratedColumn({
        name: 'codCategory',
        type: 'int'
    })
    id_category: number

    @Column({
        name: 'name',
        type: 'varchar',
        nullable: false,
        length: 30
    })
    name: string

    @Column({
        name: 'descripcion',
        type: 'varchar',
        nullable: false,
        length: 200
    })
    descripcion: string
}