import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolEntity } from "./entity/rol.entity";

@Module({
    imports: [TypeOrmModule.forFeature([RolEntity])],
    controllers: [],
    exports: [], //expone lo que le pongas 
    providers: []
})
export class RolModule {}