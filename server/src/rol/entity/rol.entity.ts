import { UserEntity } from "src/user/entity/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('tbl_rol')
export class RolEntity {

    @PrimaryGeneratedColumn({
        name: 'codRol',
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

    @ManyToOne(() => UserEntity, (userEntity: UserEntity) => userEntity.rol, {"cascade": true})
    userEntity: UserEntity
}