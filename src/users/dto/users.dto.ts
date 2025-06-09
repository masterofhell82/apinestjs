import { IsString, IsOptional, IsInt, MinLength, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsString()
    @IsNotEmpty()
    email!: string;

    @IsOptional()
    @IsString()
    @MinLength(8)
    @IsNotEmpty()
    password?: string;

    @IsOptional()
    @IsInt()
    age?: number;

    constructor(id: number, name: string, email: string) {
        this.name = name;
        this.email = email;
        this.age = 0; // Default age
        this.password = ''; // Default password
    }
}
