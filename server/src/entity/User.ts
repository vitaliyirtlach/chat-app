import { BaseEntity, Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm"
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
    email: string

    @Column()
    phone: string

    @Column()
    location: string

    @Column()
    website?: string

    @ManyToMany(() => Group, group => group.users)
    groups: Group[]
}