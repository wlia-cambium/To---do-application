import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskRepositoryInterface } from './task.repository.interface';
import { Task } from './task.model';

@Injectable()
export class TasksService {
  constructor(private readonly taskRepository: TaskRepositoryInterface) {}

  getAllTasks(): Task[] {
    return this.taskRepository.findAll();
  }

  createNewTask(title: string): Task {
    const newTask: Task = {
      id: Math.random().toString(36).substring(2, 9),
      title,
      completed: false,
    };

    return this.taskRepository.create(newTask);
  }

  toggleTaskStatus(id: string): Task {
    const task = this.taskRepository.findById(id);

    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }

    task.completed = !task.completed;
    this.taskRepository.update(task);

    return task;
  }

  removeTask(id: string): void {
    const task = this.taskRepository.findById(id);
    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }

    this.taskRepository.delete(id);
  }
  updateTaskTitle(id: string, newTitle: string): Task {
    const task = this.taskRepository.findById(id);

    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }

    task.title = newTitle;
    this.taskRepository.update(task);

    return task;
  }
}
