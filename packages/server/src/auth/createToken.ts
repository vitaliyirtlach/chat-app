import {sign} from "jsonwebtoken"
import {config} from "dotenv"
export const createToken = (userId: number, expiresIn?: number) => {
    const token = sign({ userId }, config().parsed["JWT-SECRET"], {expiresIn: "14d"})
    return token
}