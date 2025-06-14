import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/users.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}

    getAllUsers() {
        return this.prisma.user.findMany();
    }

    createUser(user: CreateUserDto) {
        return this.prisma.user.create({ data: user });
    }
}
