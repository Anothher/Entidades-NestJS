import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tbl_photo')
export class PhotoEntity{

    @PrimaryGeneratedColumn({
        name: 'codPhoto',
        type: 'int'
    })
    id_photo: number

    @Column({
        name: 'lowQuality',
        type: 'varbinary',
        nullable: false,
        length: 500
    })
    quality_low: BinaryData

    @Column({
        name: 'mediumQuality',
        type: 'varbinary',
        nullable: false,
        length: 500
    })
    quality_medium: BinaryData

    @Column({
        name: 'largeQuality',
        type: 'varbinary',
        nullable: false,
        length: 500
    })
    quality_large: BinaryData

}