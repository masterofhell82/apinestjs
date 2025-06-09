import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';

@Injectable()
export class TasksService {
    public tasks: CreateTaskDto[] = [];

    // In a real application, this would fetch tasks from a database or an external service
    getAllTasks() {
        return this.tasks;
    }

    getTask(id: number) {
        console.log(`Fetching task with ID: ${id}`);
        const task = this.tasks.find((task) => task.id === id);
        if (!task) {
            throw new NotFoundException(`Task with ID ${id} not found`);
        }
        return task;
    }

    createTask(task: CreateTaskDto) {
        console.log(task);
        this.tasks.push(task);
        return task;
    }

    updateTask(task: UpdateTaskDto) {
        console.log(`Updating task: ${JSON.stringify(task)}`);
        // Aquí se simula la actualización de una tarea
        // In a real application, this would update a task in a database or an external service
        return `Task updated successfully`;
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
