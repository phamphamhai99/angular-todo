import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  // void mean there is no value to be returned from output function
  @Output() cancel = new EventEmitter<void>();
  @Output() submit = new EventEmitter<any>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onSubmit() {
    const task = {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
    };
    this.submit.emit(task);
  }

  onCancle() {
    this.cancel.emit();
  }
}
