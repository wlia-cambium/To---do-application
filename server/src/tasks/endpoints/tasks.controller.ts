import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { TasksService } from '../tasks.service';
import { Task } from '../definitions/task.model';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getAll(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Post()
  create(@Body('title') title: string): Task {
    return this.tasksService.createNewTask(title);
  }

  @Patch(':id/toggle')
  toggleStatus(@Param('id') id: string): Task {
    return this.tasksService.toggleTaskStatus(id);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string): void {
    this.tasksService.removeTask(id);
  }

  @Patch(':id')
  updateTitle(@Param('id') id: string, @Body('title') title: string): Task {
    return this.tasksService.updateTaskTitle(id, title);
  }
}
