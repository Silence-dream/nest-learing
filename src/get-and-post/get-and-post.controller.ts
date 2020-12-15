import {
  Controller,
  Get,
  Req,
  Query,
  Post,
  Body,
  HttpCode,
  Headers,
  Header,
  Redirect,
  Param,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './get-and-post.dto';
@Controller('get-and-post')
export class GetAndPostController {
  @Get()
  // https://docs.nestjs.cn/7/controllers?id=request
  index(@Req() req: Request, @Query() haha: string) {
    console.log(req.body);
    console.log(haha);
    return { code: 200, data: haha };
  }
  @Post()
  fn(@Body() body) {
    console.log(body);
    return '这里是post';
  }
  // 路由通配符
  @Get('ab*cd')
  findAll() {
    return '这里是路由通配符';
  }
  // 状态码
  @Post('zt')
  // 状态码影响返回的状态码 默认情况下，响应的状态码总是200，除了 POST 请求外，此时它是201
  // 我们可以通过HttpCode来修改返回的code
  @HttpCode(200)
  zt() {
    return '这里是状态码';
  }

  @Post('header')
  // 自定义响应头
  @Header('Cache-Control', 'meiyoule')
  hd(@Headers() head) {
    console.log(head);
    return '自定义请求头';
  }

  // 重定向
  @Get('dx')
  @Redirect('https://www.baidu.com', 301)
  dx() {
    return '123';
  }

  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `路程传参${params.id} `;
  }

  // 请求负载
  @Post('/createDto')
  async create(@Body() createCatDto: CreateCatDto) {
    console.log(createCatDto);
    return createCatDto;
  }
}
