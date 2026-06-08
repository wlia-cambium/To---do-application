import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from './task.service';
import { Task } from './task.model';
import { ScrollingModule, CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, ScrollingModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent implements OnInit {
  tasksList: Task[] = [];

  @ViewChild(CdkVirtualScrollViewport) viewport!: CdkVirtualScrollViewport;

  constructor(
    private taskService: TaskService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  private refreshViewport(): void {
    this.cdr.detectChanges();
    setTimeout(() => {
      if (this.viewport) {
        this.viewport.checkViewportSize();
      }
    }, 0);
  }

  trackById(index: number, task: Task): string {
    return task.id;
  }

  loadTasks(): void {
    this.taskService.getAllTasks().subscribe({
      next: (data) => {
        this.tasksList = data;
        this.refreshViewport();
      },
      error: (err) => console.error(err),
    });
  }

  addTask(title: string): void {
    if (!title.trim()) return;

    this.taskService.createTask(title).subscribe({
      next: (newTask) => {
        this.tasksList = [...this.tasksList, newTask];
        this.refreshViewport();
      },
      error: (err) => console.error(err),
    });
  }

  toggleTask(id: string): void {
    this.taskService.toggleTaskStatus(id).subscribe({
      next: (updatedTask) => {
        this.tasksList = this.tasksList.map((t) => (t.id === id ? updatedTask : t));
        this.refreshViewport();
      },
      error: (err) => console.error(err),
    });
  }

  deleteTask(id: string): void {
    this.taskService.removeTask(id).subscribe({
      next: () => {
        this.tasksList = this.tasksList.filter((t) => t.id !== id);
        this.refreshViewport();
      },
      error: (err) => console.error(err),
    });
  }
}
