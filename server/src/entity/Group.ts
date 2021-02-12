import { BaseEntity, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Group extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @OneToMany(() => User, user => user.groups)
    users: User[]
}