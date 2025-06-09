import { IsString, IsOptional, IsEnum, IsInt, MinLength } from 'class-validator';
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

    @IsOptional()
    @IsString()
    @MinLength(1)
    description?: string;

    @IsOptional()
    @IsEnum(Priority)
    priority?: Priority;

    @IsOptional()
    @IsEnum(Status)
    status?: Status;

    constructor(
        title: string,
        description?: string,
        priority?: Priority,
        status?: Status
    ) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.status = status;
    }
}
export class UpdateTaskDto {
    title?: string;
    description?: string;
    priority?: 'low' | 'medium' | 'high';
    status?: 'pending' | 'in-progress' | 'completed';

    constructor(
        title?: string,
        description?: string,
        priority?: 'low' | 'medium' | 'high',
        status?: 'pending' | 'in-progress' | 'completed'
    ) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.status = status;
    }
}
