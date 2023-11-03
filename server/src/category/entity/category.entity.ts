import { PhotoEntity } from "src/photo/entity/photo.entity";
import { ProfileEntity } from "src/profile/entity/profile.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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

    @OneToOne(() => PhotoEntity,(photo: PhotoEntity) => photo.id_photo, {"cascade": true})
    @JoinColumn({ name: 'codPhoto'})
    photo: PhotoEntity
    
}