import { Component, Input } from '@angular/core';
import { DUMMY_TASKS } from '../dummy-tasks';
import { TaskComponent } from './task/task.component';
import { User } from '../user/user.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTask, Task } from './task/task.model';
import { TasksService } from './services/tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent,
    NewTaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({required: true}) selectedUser!: User;
  tasks: Task[] = [];

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.selectedUser.id);
  }

  constructor(private tasksService: TasksService) { }

  // new task

  isAddingTask: boolean = false;

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onAddTask(task: NewTask) {
    this.tasksService.addTask(task, this.selectedUser.id);
    this.isAddingTask = false;
    console.log(this.tasks);
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  // complete task

  onCompleteTask(id: string) {
    this.tasksService.removeTask(id);
  }

}
