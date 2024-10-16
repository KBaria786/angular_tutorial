import { JsonPipe } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [
    FormsModule,
    JsonPipe
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  enteredTitle = "";
  enteredSummary = "";
  enteredDate = "";

  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();

  onCancel() {
    this.cancel.emit();
  }

  @Output() add: EventEmitter<NewTask> = new EventEmitter<NewTask>();

  onSubmit() {
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate
    });
  }

}
