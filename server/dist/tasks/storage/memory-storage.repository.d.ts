import { TaskRepositoryInterface } from '../definitions/task.repository.interface';
import { Task } from '../definitions/task.model';
export declare class MemoryStorageRepository implements TaskRepositoryInterface {
    private static tasks;
    findAll(): Task[];
    findById(id: string): Task | undefined;
    create(task: Task): Task;
    update(updatedTask: Task): void;
    delete(id: string): void;
}
