import { BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm"
import { Group } from "./Group"

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

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
   
    @Column({nullable: true})
    phone: string

    @Column({nullable: true})
    website: string

}