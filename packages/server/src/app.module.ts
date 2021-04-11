import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { GroupsModule } from './groups/groups.module';
import { AuthMiddleware } from './middleware/auth.middleware';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(), 
    AuthModule,
    ProfileModule,
    GroupsModule
  ],
  providers: [],
  controllers: [AppController]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(AuthMiddleware)
    .forRoutes(
      "profile",
      "groups",
      {path: "auth", method: RequestMethod.GET}
    )
  }
}
