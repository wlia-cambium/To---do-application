import { Injectable } from '@nestjs/common';
import { TaskRepositoryInterface } from '../definitions/task.repository.interface';
import { Task } from '../definitions/task.model';

@Injectable()
export class MemoryStorageRepository implements TaskRepositoryInterface {
  private tasks: Task[] = Array.from({ length: 20 }).map((_, index) => ({
    id: index.toString(),
    title: `משימה מספר ${index + 1}`,
    completed: false,
  }));

  findAll(): Task[] {
    return this.tasks;
  }

  findById(id: string): Task | undefined {
    return this.tasks.find((task) => task.id === id);
  }

  create(task: Task): Task {
    this.tasks.push(task);
    return task;
  }

  update(updatedTask: Task): void {
    const index = this.tasks.findIndex((task) => task.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
    }
  }

  delete(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
