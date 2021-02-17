import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { MessagesModule } from './messages/messages.module';
import { AuthMiddleware } from './middleware/auth.middleware';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(), 
    MessagesModule,
    AuthModule,
    ProfileModule
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
      {path: "auth", method: RequestMethod.GET}
    )
  }
}
