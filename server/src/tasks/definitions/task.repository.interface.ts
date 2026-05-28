import { Task } from './task.model';

export abstract class TaskRepositoryInterface {
  abstract findAll(): Task[];
  abstract findById(id: string): Task | undefined;
  abstract update(task: Task): void;
  abstract delete(id: string): void;
}
