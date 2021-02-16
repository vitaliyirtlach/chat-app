import { Body, Controller, Get, Post, Req, Res } from "@nestjs/common";
import { User } from "src/entity/User";
import { CreateUserDto } from "./dto/create-user.dto";
import { LoginUserDto } from "./dto/login-user.dto";
import { compare, hash } from "bcrypt"
import { createToken } from "./createToken";
import {Response} from "express"
@Controller("auth")
export class AuthController {
    @Post("register")
    async register(@Body() createUserDto: CreateUserDto, @Res({ passthrough: true }) response: Response) {
        const {firstName, lastName, email, location, password} = createUserDto
        const sameEmails = await User.findOne({
            where: { email }
        })
        if (sameEmails) return {message: "This email address is already in use!"}
        const hashedPassword = await hash(password, 10)
        const user = User.create({
            firstName,
            lastName,
            location,
            email,
            groups: [],
            password: hashedPassword
        })
        await user.save()
        response.cookie('access_token', createToken(user.id))
        return user
    }
    @Post("/login")
    async login(@Body() loginUserDto: LoginUserDto, @Res({ passthrough: true }) response: Response) {
       const {password, email} = loginUserDto 
       const user = await User.findOne({
           where: { email },
           relations: ["groups"]
       })
       if (await compare(password, user.password)) {
            response.cookie('access_token', createToken(user.id))
            return user
       } return {message: "Invalid form data"}
    }
}