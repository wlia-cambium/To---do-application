"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MemoryStorageRepository_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryStorageRepository = void 0;
const common_1 = require("@nestjs/common");
let MemoryStorageRepository = class MemoryStorageRepository {
    static { MemoryStorageRepository_1 = this; }
    static tasks = [];
    findAll() {
        return MemoryStorageRepository_1.tasks;
    }
    findById(id) {
        const cleanId = id.trim().replace(':', '');
        return MemoryStorageRepository_1.tasks.find((task) => task.id.trim() === cleanId);
    }
    create(task) {
        MemoryStorageRepository_1.tasks.push(task);
        return task;
    }
    update(updatedTask) {
        const index = MemoryStorageRepository_1.tasks.findIndex((task) => task.id === updatedTask.id);
        if (index !== -1) {
            MemoryStorageRepository_1.tasks[index] = updatedTask;
        }
    }
    delete(id) {
        const cleanId = id.trim().replace(':', '');
        MemoryStorageRepository_1.tasks = MemoryStorageRepository_1.tasks.filter((task) => task.id.trim() !== cleanId);
    }
};
exports.MemoryStorageRepository = MemoryStorageRepository;
exports.MemoryStorageRepository = MemoryStorageRepository = MemoryStorageRepository_1 = __decorate([
    (0, common_1.Injectable)()
], MemoryStorageRepository);
//# sourceMappingURL=memory-storage.repository.js.map