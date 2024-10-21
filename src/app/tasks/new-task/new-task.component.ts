import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  // void mean there is no value to be returned from output function
  @Output() cancel = new EventEmitter<void>();

  onCancle() {
    this.cancel.emit();
  }
}
