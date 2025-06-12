import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TasksService {
    public tasks: CreateTaskDto[] = [];
    constructor(private prisma: PrismaService) {}
    // In a real application, this would fetch tasks from a database or an external service
    getAllTasks() {
        return this.prisma.task.findMany();
    }

    getTask(id: number) {
        const task = this.prisma.task
            .findUnique({
                where: { id: id },
            })
            .then((task) => {
                if (!task) {
                    throw new NotFoundException(`Task with ID ${id} not found`);
                }
                return task;
            });

        return task;
    }

    createTask(task: CreateTaskDto) {
        return this.prisma.task.create({ data: task });
    }

    updateTask(id: number, updateData: UpdateTaskDto) {
        return this.prisma.task.update({
            where: { id },
            data: updateData,
        });
    }

    patchTask(id: any) {
        // Aquí se simula la actualización parcial de una tarea
        // In a real application, this would partially update a task in a database or an external service
        return `Task with ID ${id} patched successfully`;
    }
    deleteTask(id: any) {
        // Aquí se simula la eliminación de una tarea
        // In a real application, this would delete a task in a database or an external service
        return `Task with ID ${id} deleted successfully`;
    }
}
