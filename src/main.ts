import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
const port = 4250;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 全局验证管道
  app.useGlobalPipes(new ValidationPipe());

  // swagger配置
  // https://liubf.com/2020/01/11/nestjs%e5%85%a5%e9%97%a8swagger%ef%bc%8c%e5%bf%ab%e9%80%9f%e6%90%ad%e5%bb%barestfulapi%e6%96%87%e6%a1%a3/
  const options = new DocumentBuilder()
    .setTitle('博客api')
    .setDescription('这是博客')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(port, () => console.log(`http://localhost:${port}`));
}
bootstrap();
// https://www.bilibili.com/video/BV1U441117xK/?spm_id_from=333.788.recommend_more_video.0
