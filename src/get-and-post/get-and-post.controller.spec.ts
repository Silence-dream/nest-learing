import { Test, TestingModule } from '@nestjs/testing';
import { GetAndPostController } from './get-and-post.controller';

describe('GetAndPostController', () => {
  let controller: GetAndPostController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetAndPostController],
    }).compile();

    controller = module.get<GetAndPostController>(GetAndPostController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
