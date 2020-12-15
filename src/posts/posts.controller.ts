import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiProperty, ApiTags } from '@nestjs/swagger';
// 校验数据用的
import { IsNotEmpty } from 'class-validator';
class PutBodyDto {
  // 设置body参数
  @ApiProperty({ description: '帖子标题', example: '标题' })
  @IsNotEmpty({ message: '标题不能为空' })
  title: string;
  @ApiProperty({ description: '内容', name: 'context', example: '内容' })
  context: string;
}
@Controller('posts')
@ApiTags('Posts')
export class PostsController {
  @Get()
  @ApiOperation({ summary: '显示博客列表' })
  index() {
    return '这里是posts';
  }

  @Get(':id')
  @ApiOperation({ summary: '博客详情' })
  @ApiParam({ name: 'id', description: '传入的id' })
  showDetail(@Param('id') id) {
    return `传入的值是${id}`;
  }

  @Post()
  @ApiOperation({ summary: '创建博客帖子' })
  fn() {
    return '这里是posts';
  }

  @Put(':id')
  @ApiOperation({ summary: '修改帖子' })
  edit(@Param('id') id: string, @Body() body: PutBodyDto) {
    console.log(id, body);
    return `${id}${body}`;
  }
}
