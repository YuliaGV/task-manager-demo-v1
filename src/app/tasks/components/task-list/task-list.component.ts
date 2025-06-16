import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy, signal } from '@angular/core';

import {MatExpansionModule} from '@angular/material/expansion';
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

}
