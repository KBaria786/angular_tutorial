import { Injectable } from '@angular/core';
import { NewTask, Task } from '../task/task.model';
import { DUMMY_TASKS } from '../../dummy-tasks';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private _tasks: Task[] = DUMMY_TASKS;

  get tasks() {
    return this._tasks;
  }

  getUserTasks(userId: string) {
    return this._tasks.filter(task => task.userId === userId);
  }

  constructor() {
    const tasks = localStorage.getItem("tasks");
    if(tasks) {
      this._tasks = JSON.parse(tasks);
    }
  }

  addTask(newTask: NewTask, userId: string) {
    this._tasks.push({
      id: "t" + (+this._tasks[this._tasks.length - 1].id.replace("t", "") + 1),
      userId: userId,
      ...newTask
    });
    this.saveTasks();
  }

  removeTask(id: string) {
    this._tasks = this._tasks.filter(task => task.id !== id);
    this.saveTasks();
  }

  saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(this._tasks));
  }

}
