import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/users.dto';

@Injectable()
export class UsersService {
    private users: CreateUserDto[] = [
        {
            name: 'John Doe',
            email: 'admin@admin.com',
            password: 'admin123',
        },
        {
            name: 'Jane Smith',
            email: 'larzon@compra.com',
            password: 'user123',
        },
    ];

    getAllUsers() {
        return this.users;
    }

    createUser(user: CreateUserDto) {
        this.users.push(user);
        return {
            id: this.users.length + 1,
            ...user,
        };
    }
}
