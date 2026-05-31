import { Injectable } from '@nestjs/common';
import { TaskRepositoryInterface } from '../definitions/task.repository.interface';
import { Task } from '../definitions/task.model';

@Injectable()
export class MemoryStorageRepository implements TaskRepositoryInterface {
  private static tasks: Task[] = [];

  findAll(): Task[] {
    return MemoryStorageRepository.tasks;
  }

  findById(id: string): Task | undefined {
    const cleanId = id.trim().replace(':', '');
    return MemoryStorageRepository.tasks.find(
      (task) => task.id.trim() === cleanId,
    );
  }

  create(task: Task): Task {
    MemoryStorageRepository.tasks.push(task);
    return task;
  }

  update(updatedTask: Task): void {
    const index = MemoryStorageRepository.tasks.findIndex(
      (task) => task.id === updatedTask.id,
    );
    if (index !== -1) {
      MemoryStorageRepository.tasks[index] = updatedTask;
    }
  }

  delete(id: string): void {
    const cleanId = id.trim().replace(':', '');
    MemoryStorageRepository.tasks = MemoryStorageRepository.tasks.filter(
      (task) => task.id.trim() !== cleanId,
    );
  }
}
