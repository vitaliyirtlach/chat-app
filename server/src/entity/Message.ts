import { BaseEntity, Entity, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Group } from "./Group";
import { User } from "./User";

@Entity()
export class Message extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => User, user => user.messages)
    author: User

    @ManyToOne(() => Group, group => group.messages)
    group: Group
}