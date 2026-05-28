import { TasksService } from '../tasks.service';
import { Task } from '../definitions/task.model';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    getAll(): Task[];
    create(title: string): Task;
    toggleStatus(id: string): Task;
    remove(id: string): void;
    updateTitle(id: string, title: string): Task;
}
