import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../core/services/task.service';
import { Task } from '../../core/models/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent implements OnInit {
  tasksList: Task[] = [];

  constructor(
    private taskService: TaskService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getAllTasks().subscribe({
      next: (data) => {
        this.tasksList = data;
        this.cdr.detectChanges();
      },
      error: (err) => console.error(err),
    });
  }

  addTask(title: string): void {
    if (!title.trim()) return;

    this.taskService.createTask(title).subscribe({
      next: (newTask) => {
        this.tasksList = [...this.tasksList, newTask];
        this.cdr.detectChanges();
      },
      error: (err) => console.error(err),
    });
  }

  toggleTask(id: string): void {
    this.taskService.toggleTaskStatus(id).subscribe({
      next: (updatedTask) => {
        this.tasksList = this.tasksList.map((t) => (t.id === id ? updatedTask : t));
        this.cdr.detectChanges(); // <-- הכרחת רענון המסך!
      },
      error: (err) => console.error(err),
    });
  }

  deleteTask(id: string): void {
    this.taskService.removeTask(id).subscribe({
      next: () => {
        this.tasksList = this.tasksList.filter((t) => t.id !== id);
        this.cdr.detectChanges();
      },
      error: (err) => console.error(err),
    });
  }
}
