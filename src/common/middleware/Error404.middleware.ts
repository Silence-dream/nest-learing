import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

// @Injectable()

export function logger(req: Request, res: Response, next: () => void) {
  // console.log(req.originalUrl);
  // res.send('404');
  console.log(1);
  next();
}

// export class Error404 implements NestMiddleware {
//   use(req: Request, res: Response, next: () => void) {
//     const { method, path } = req;
//     console.log(`${method}--${path}`);
//     next();
//   }
// }
