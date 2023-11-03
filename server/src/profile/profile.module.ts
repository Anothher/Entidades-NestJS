import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProfileEntity } from "./entity/profile.entity";

@Module({
    imports: [TypeOrmModule.forFeature([ProfileEntity])],
    controllers: [],
    providers: [],
    exports:[]
})
export class ProfileModule {}   