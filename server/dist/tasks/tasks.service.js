"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const task_repository_interface_1 = require("./task.repository.interface");
let TasksService = class TasksService {
    taskRepository;
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    getAllTasks() {
        return this.taskRepository.findAll();
    }
    createNewTask(title) {
        const newTask = {
            id: Math.random().toString(36).substring(2, 9),
            title,
            completed: false,
        };
        return this.taskRepository.create(newTask);
    }
    toggleTaskStatus(id) {
        const task = this.taskRepository.findById(id);
        if (!task) {
            throw new common_1.NotFoundException(`Task with ID ${id} not found`);
        }
        task.completed = !task.completed;
        this.taskRepository.update(task);
        return task;
    }
    removeTask(id) {
        const task = this.taskRepository.findById(id);
        if (!task) {
            throw new common_1.NotFoundException(`Task with ID ${id} not found`);
        }
        this.taskRepository.delete(id);
    }
    updateTaskTitle(id, newTitle) {
        const task = this.taskRepository.findById(id);
        if (!task) {
            throw new common_1.NotFoundException(`Task with ID ${id} not found`);
        }
        task.title = newTitle;
        this.taskRepository.update(task);
        return task;
    }
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [task_repository_interface_1.TaskRepositoryInterface])
], TasksService);
//# sourceMappingURL=tasks.service.js.map