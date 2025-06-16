import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private storageKey = 'tasks';

  getTasks(): Task[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  saveTasks(tasks: Task[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
  }

  addTask(task: Task): void {
    const tasks = this.getTasks();
    task.id = Date.now(); 
    tasks.push(task);
    this.saveTasks(tasks);
  }

  updateTask(updated: Task): void {
    const tasks = this.getTasks().map(t => t.id === updated.id ? updated : t);
    this.saveTasks(tasks);
  }

  deleteTask(id: number): void {
    const tasks = this.getTasks().filter(t => t.id !== id);
    this.saveTasks(tasks);
  }
}