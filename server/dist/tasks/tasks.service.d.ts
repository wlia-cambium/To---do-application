import { TaskRepositoryInterface } from './definitions/task.repository.interface';
import { Task } from './definitions/task.model';
export declare class TasksService {
    private readonly taskRepository;
    constructor(taskRepository: TaskRepositoryInterface);
    getAllTasks(): Task[];
    createNewTask(title: string): Task;
    toggleTaskStatus(id: string): Task;
    removeTask(id: string): void;
    updateTaskTitle(id: string, newTitle: string): Task;
}
