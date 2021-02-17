import { Controller, Put, Get, Post, Patch, Body, Req } from "@nestjs/common";
import { Request } from "express";
import { User } from "src/entity/User";
import { UpdateUserDto } from "./dto/update-user.dto";

@Controller("profile")
export class ProfileController {
    @Put("update") 
    async updateUserProfile(@Body() updateUserDto: UpdateUserDto, @Req() req: Request) {
        const {firstName, lastName, website, location, phone} = updateUserDto

        const user: User = (req as any).user
        user.firstName = firstName
        user.lastName = lastName
        user.website = website
        user.location = location
        user.phone = phone
        user.save()
        return user 
    }
}