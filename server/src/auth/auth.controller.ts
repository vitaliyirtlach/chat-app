import { Body, Controller, Get, Post, Req, Res } from "@nestjs/common";
import { User } from "src/entity/User";
import { CreateUserDto } from "./dto/create-user.dto";
import { LoginUserDto } from "./dto/login-user.dto";
import { compare, hash } from "bcrypt"
import { createToken } from "./createToken";
import {Response} from "express"
@Controller("auth")
export class AuthController {
    @Get()
    async checkAuth(@Req() req: any) {
        return req.user 
    }
    @Post("register")
    async register(@Body() createUserDto: CreateUserDto, @Res({ passthrough: true }) response: Response) {
        const {firstName, lastName, email, location, password} = createUserDto
        const sameEmails = await User.findOne({
            where: { email }
        })
        if (sameEmails) return {message: "This email address is already in use!"}
        const hashedPassword = await hash(password, 10)
        const user = new User()
        user.firstName = firstName
        user.lastName = lastName,
        user.location = location,
        user.email = email,
        user.groups = []
        user.password = hashedPassword
        
        await user.save()
        response.cookie('access_token', createToken(user.userId))
        return user 
    }
    @Post("login")
    async login(@Body() loginUserDto: LoginUserDto, @Res({ passthrough: true }) response: Response) {
       const {password, email} = loginUserDto 
       const user = await User.findOne({
           where: { email },
           relations: ["groups", "groups.users", "groups.messages", "groups.messages.author"]
       })
       if (user && await compare(password, user.password)) {
            response.cookie('access_token', createToken(user.userId))
            return user
       } return {message: "Invalid password or email address!"}
    }
}