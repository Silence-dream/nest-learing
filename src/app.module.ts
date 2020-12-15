import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GetAndPostController } from './get-and-post/get-and-post.controller';

@Module({
  imports: [],
  controllers: [AppController, GetAndPostController],
  providers: [AppService],
})
export class AppModule { }
