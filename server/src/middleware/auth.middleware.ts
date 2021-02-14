import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { verify } from "jsonwebtoken"
import {config} from "dotenv"

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.cookies["access_token"]
    if (token) {
      const v: any = verify(token, config().parsed["JWT-SECRET"]);
      (req as any).userId = v.userId
      next();
    } else {
      res.redirect("http://localhost:3000/auth")
    }
  }
}