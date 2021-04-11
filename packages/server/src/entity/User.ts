import { defaultAvatar } from "src/default/defaultAvatar"
import { BaseEntity, Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Group } from "./Group"
import { Message } from "./Message"

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    userId: number

    @Column()
    firstName: string

    @Column()
    lastName: string
    
    @Column()
    password: string

    @Column()
    email: string

    @Column()
    location: string
    
    @ManyToMany(() => Group, group => group.users)
    @JoinTable()
    groups: Group[]
 
    @OneToMany(() => Message, message => message.author) 
    messages: Message[]
    
    @Column({nullable: true, default: defaultAvatar})
    avatar: string
   
    @Column({nullable: true})
    phone: string

    @Column({nullable: true})
    website: string

}