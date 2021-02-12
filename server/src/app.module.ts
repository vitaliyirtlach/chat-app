import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(), 
    MessagesModule,
    AuthModule
  ],
  providers: [],
  controllers: []
})
export class AppModule {}
