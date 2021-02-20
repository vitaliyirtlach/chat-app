import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { verify } from "jsonwebtoken"
import {config} from "dotenv"
import { User } from 'src/entity/User';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    const token = req.cookies["access_token"]
    if (token) {
      const v: any = verify(token, config().parsed["JWT-SECRET"]);
      (req as any).user = await User.findOne(v.userId, {relations: ["groups", "groups.users", "groups.messages"]})
      next();
    } else {
       res.send( {message: "Not loggined"} )
    }
  }
}