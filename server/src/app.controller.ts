import { Controller, Get, Req } from '@nestjs/common';
import { User } from './entity/User';

@Controller("")
export class AppController {
  @Get()
  async checkAuth(@Req() req: any) {
      if (req.userId) {
          return await User.findOne(req.userId) 
      }
  }
}
 