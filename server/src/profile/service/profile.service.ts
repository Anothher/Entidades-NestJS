import { Inject, Injectable } from "@nestjs/common";
import { ProfileEntity } from "../entity/profile.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

Injectable()
export class ProfileService{
    constructor(
        @InjectRepository(ProfileEntity)
        private profileRepo : Repository<ProfileEntity>
    ){}

    findAll(){
        return this.profileRepo.find()
    }

}