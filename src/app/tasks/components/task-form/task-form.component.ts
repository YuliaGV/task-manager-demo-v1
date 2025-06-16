import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {

  // These properties are used to bind the form fields to the component
  title = '';
  dueDate = '';
  priority: Task['priority'] = 'medium';
 
  
  // This event emitter is used to emit the task data when the user submits the form
  @Output() add = new EventEmitter<Omit<Task, 'id' | 'createdAt' | 'completed'>>();


  // This method is called when the user submits the form
  // It emits the add event with the task data. It also resets the form fields to their initial values
  submit() {
    if (!this.title) return;

    this.add.emit({
      title: this.title,
      dueDate: this.dueDate ? new Date(this.dueDate) : undefined,
      priority: this.priority
    });


    this.title = '';
    this.dueDate = '';
    this.priority = 'medium';
  }

}
