import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { Group } from "src/entity/Group";
import { User } from "src/entity/User";
import { CreateGroupDto } from "./dto/create-group.dto";

@Controller("groups")
export class GroupsController {
    @Post("create") 
    async createGroup(@Body() createGroupDto: CreateGroupDto, @Req() req: Request) {
        const {user_email} = createGroupDto
        const me = (req as any).user
        const user = await User.findOne({
            where: {
                email: user_email
            }
        })
        const group = new Group()
        group.users = [me, user]
        group.messages = []
        await group.save()
        return group 
    }
    @Get("/:id")
    async getGroupById(@Param('id') id: string) {
        return await Group.findOne(id, {relations: ["users", "messages", "messages.author"]})
    }
}