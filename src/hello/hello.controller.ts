import {
    Controller,
    Get,
    HttpCode,
    Param,
    ParseBoolPipe,
    ParseIntPipe,
    Query,
    Req,
    Res,
    UseGuards,
} from '@nestjs/common';

import { Request, Response } from 'express';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller('hello')
export class HelloController {
    @Get('/')
    index(@Req() req: Request, @Res() res: Response) {
        console.log(req.url);
        res.status(200).send({
            message: 'Hello, World!',
        });
    }

    @Get('/new')
    @HttpCode(201)
    something() {
        return 'Something new';
    }

    @Get('/notfound')
    @HttpCode(404)
    notFoundPage() {
        return '404 Not Found';
    }

    @Get('/error')
    @HttpCode(500)
    errorPage() {
        return 'Error Route';
    }

    @Get('/ticket/:num')
    @HttpCode(200)
    getNumber(@Param('num', ParseIntPipe) num: number) {
        return num + 14;
    }

    @Get('/active/:status')
    isUserAcive(@Param('status', ParseBoolPipe) status: boolean) {
        console.log(typeof status);
        return status;
    }

    @Get('/greet')
    @HttpCode(200)
    @UseGuards(AuthGuard) // You can add guards here if needed
    greet(@Query(ValidateuserPipe) query: { name: string; age: number }) {
        return `Hello, ${query.name}! You are ${query.age} years old.`;
    }
}
