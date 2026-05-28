"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryStorageRepository = void 0;
const common_1 = require("@nestjs/common");
let MemoryStorageRepository = class MemoryStorageRepository {
    tasks = Array.from({ length: 20 }).map((_, index) => ({
        id: index.toString(),
        title: `משימה מספר ${index + 1}`,
        completed: false,
    }));
    findAll() {
        return this.tasks;
    }
    findById(id) {
        return this.tasks.find((task) => task.id === id);
    }
    create(task) {
        this.tasks.push(task);
        return task;
    }
    update(updatedTask) {
        const index = this.tasks.findIndex((task) => task.id === updatedTask.id);
        if (index !== -1) {
            this.tasks[index] = updatedTask;
        }
    }
    delete(id) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
    }
};
exports.MemoryStorageRepository = MemoryStorageRepository;
exports.MemoryStorageRepository = MemoryStorageRepository = __decorate([
    (0, common_1.Injectable)()
], MemoryStorageRepository);
//# sourceMappingURL=memory-storage.repository.js.map