import { Body, Controller, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { Group } from "src/entity/Group";
import { User } from "src/entity/User";
import { CreateGroupDto } from "./dto/create-group.dto";

@Controller("groups")
export class GroupsController {
    @Post("create") 
    async createGroup(@Body() createGroupDto: CreateGroupDto, @Req() req: Request) {
        const {name, user_email} = createGroupDto
        let user = null
        if (user_email) {
            user = await User.findOne({
                where: {
                    email: user_email
                },
                relations: ["groups"]

            })
        } else {
            const [firstName, lastName] = name.split(" ")
            user = await User.findOne({
                where: {
                    firstName: firstName,
                    lastName: lastName 
                },
                relations: ["groups"]
            })
        }
        const group = new Group()
        const users = [(req as any).user, user]
        group.users = users
        await group.save();
        return group
    }
}