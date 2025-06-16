import { Component } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.css']
})
export class TasksPageComponent {

  tasks: Task[] = [];

  ngOnInit(): void {
    const stored = localStorage.getItem('tasks');
    this.tasks = stored ? JSON.parse(stored).map((t: any) => ({
      ...t,
      createdAt: new Date(t.createdAt),
      dueDate: new Date(t.dueDate)
    })) : [];
  }

  addTask(task: Omit<Task, 'id' | 'createdAt' | 'completed'>) {
    const newTask: Task = {
      ...task,
      id: Date.now(),
      createdAt: new Date(),
      completed: false
    };
    this.tasks.push(newTask);
    this.save();
  }

  toggleComplete(id: number) {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = !task.completed;
      this.save();
    }
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
    this.save();
  }

  private save() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

}
