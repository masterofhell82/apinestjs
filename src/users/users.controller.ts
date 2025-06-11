import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/users.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get('/')
    @ApiOperation({
        summary: 'Get all users',
        description: 'Retrieves a list of all users in the system.',
    })
    @ApiResponse({
        status: 200,
        description: 'List of users retrieved successfully.',
        type: [CreateUserDto], // Assuming CreateUserDto is used for user representation
    })
    @ApiResponse({
        status: 404,
        description: 'No users found.',
    })
    getAllUsers() {
        return this.usersService.getAllUsers();
    }
    @Post('/')
    @ApiOperation({
        summary: 'Create a new user',
        description: 'Creates a new user in the system with the provided details.',
    })
    createUser(@Body() user: CreateUserDto) {
        return this.usersService.createUser(user);
    }
}
