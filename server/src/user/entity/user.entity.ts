import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { RolEntity } from "src/rol/entity/rol.entity";
import { ProfileEntity } from "src/profile/entity/profile.entity";

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

    @OneToMany(() => RolEntity, (rol: RolEntity) => rol.id_rol)
    @JoinColumn({ name: 'codRol' })
    rol: RolEntity[]

    @OneToOne(() => ProfileEntity, (profile: ProfileEntity) => profile.id_profile, {"cascade": true})
    @JoinColumn({ name: "codProfile" })
    perfil: ProfileEntity
}