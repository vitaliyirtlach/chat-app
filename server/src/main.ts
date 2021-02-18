import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import "reflect-metadata"
import * as cookieParser from 'cookie-parser';
import {json, urlencoded} from "body-parser"

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser())
  app.use(json({limit: '50mb'}));
  app.use(urlencoded({limit: '50mb', extended: true}));
  app.enableCors({
    origin: "http://localhost:8080",
    credentials: true
  })
  await app.listen(5000);
}
bootstrap();
