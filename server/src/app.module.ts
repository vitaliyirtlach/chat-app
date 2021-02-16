import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { MessagesModule } from './messages/messages.module';
import { AuthMiddleware } from './middleware/auth.middleware';

@Module({
  imports: [
    TypeOrmModule.forRoot(), 
    MessagesModule,
    AuthModule
  ],
  providers: [],
  controllers: [AppController]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(AuthMiddleware)
    .forRoutes("cats")
  }
}
