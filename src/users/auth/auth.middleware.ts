import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: () => void) {
        const authHeader = req.headers['authorization'];
        if (!authHeader) {
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        }
        if (authHeader !== 'xyz123') {
            throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        }
        next();
    }
}
