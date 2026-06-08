import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TaskRepositoryInterface } from './task.repository.interface';
import { MemoryStorageRepository } from './memory-storage.repository';

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
