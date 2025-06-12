import { IsString, IsOptional, IsEnum, IsInt, MinLength, IsBoolean } from 'class-validator';
import 'reflect-metadata';

export enum Priority {
    LOW = 'low',
    MEDIUM = 'medium',
    HIGH = 'high',
}

export enum Status {
    PENDING = 'pending',
    IN_PROGRESS = 'in-progress',
    COMPLETED = 'completed',
}

export class CreateTaskDto {
    id: number;

    @IsString()
    @MinLength(1)
    title: string;

    @IsString()
    @MinLength(1)
    description: string;

    @IsOptional()
    @IsInt()
    priority?: number; // Cambiado a number

    @IsBoolean()
    status: boolean; 
}

export class UpdateTaskDto {
    id: number;
    @IsOptional()
    @IsString()
    title?: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsInt()
    priority?: number; // Cambiado a number

    @IsOptional()
    @IsBoolean()
    status?: boolean; // Cambiado a boolean
}
