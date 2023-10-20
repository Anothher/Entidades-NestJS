import { ProfileEntity } from "../entity/profile.entity";
import { Repository } from "typeorm";
export declare class ProfileService {
    private profileRepo;
    constructor(profileRepo: Repository<ProfileEntity>);
    findAll(): Promise<ProfileEntity[]>;
}
