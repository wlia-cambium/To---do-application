import { Module } from '@nestjs/common';
import { TasksController } from './endpoints/tasks.controller';
import { TasksService } from './tasks.service';
import { TaskRepositoryInterface } from './definitions/task.repository.interface';
import { MemoryStorageRepository } from './storage/memory-storage.repository';

@Module({
  controllers: [TasksController],
  providers: [
    TasksService,
    {
      provide: TaskRepositoryInterface,
      useClass: MemoryStorageRepository,
    },
  ],
  exports: [TasksService],
})
export class TasksModule {}
