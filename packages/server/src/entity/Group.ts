import { BaseEntity, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Message } from "./Message";
import { User } from "./User";

@Entity()
export class Group extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToMany(() => User, user => user.groups)
    users: User[]

    @OneToMany(() => Message, message => message.group)
    messages: Message[]
}