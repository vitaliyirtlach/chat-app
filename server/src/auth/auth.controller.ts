import { Controller, Get } from "@nestjs/common";
import { User } from "src/entity/User";

@Controller("/auth")
export class AuthController {
    @Get()
    async getAll() {
        return await User.find()
    }
}