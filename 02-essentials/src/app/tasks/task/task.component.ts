import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;

  constructor(private tasksService: TasksService) { }

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id)
  }
}
