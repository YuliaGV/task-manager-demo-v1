import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { Task } from '../../models/task.model';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

    readonly panelOpenState = signal(false);

    @Input() tasks: Task[] = [];
    @Output() toggle = new EventEmitter<number>();
    @Output() delete = new EventEmitter<number>();

    get highPriorityTasks(): Task[] {
      console.log('High priority tasks:', this.tasks.filter(task => task.priority === 'high'));
      return this.tasks.filter(task => task.priority === 'high');
    }

    get mediumPriorityTasks(): Task[] {
      return this.tasks.filter(task => task.priority === 'medium');
    }

    get lowPriorityTasks(): Task[] {
      return this.tasks.filter(task => task.priority === 'low');
    }

}
