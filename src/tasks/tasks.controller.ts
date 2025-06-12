import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Put,
    Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';

@Controller('/tasks')
export class TasksController {
    tasksService: TasksService;

    constructor(tasksService: TasksService) {
        this.tasksService = tasksService;
    }

    @Get('/')
    getAllTasks(@Query() query: any) {
        // Buscara en una base de datos o en un servicio externo
        // Petición a otro backend, servico o api
        // Aquí se simula una respuesta estática
        // In a real application, this would fetch tasks from a database or an external service
        console.log(query);
        return this.tasksService.getAllTasks();
    }

    @Get('/:id')
    getTask(@Param('id') id: string) {
        return this.tasksService.getTask(parseInt(id));
    }

    @Post('/')
    createTask(@Body() task: CreateTaskDto) {
        // Aquí se simula la creación de una tarea
        // In a real application, this would create a task in a database or an external service
        return this.tasksService.createTask(task);
    }

    @Put('/:id') // Update a task
    updateTask(@Param('id') id: string, @Body() task: UpdateTaskDto) {
        // Llama al servicio pasando el id como argumento separado
        return this.tasksService.updateTask(Number(id), task);
    }

    @Patch('/:id') // Partial update of a task
    patchTask(@Param('id') id: any) {
        // Aquí se simula la actualización parcial de una tarea
        // In a real application, this would partially update a task in a database or an external service
        return this.tasksService.patchTask(id);
    }

    @Delete('/:id')
    deleteTask(@Param('id') id: any) {
        // Aquí se simula la eliminación de una tarea
        // In a real application, this would delete a task in a database or an external service
        return this.tasksService.deleteTask(id);
    }
}
