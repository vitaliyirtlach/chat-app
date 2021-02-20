import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Group } from "./Group";
import { User } from "./User";

@Entity()
export class Message extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    text: string

    @ManyToOne(() => User, user => user.messages)
    author: User

    @ManyToOne(() => Group, group => group.messages)
    group: Group
}