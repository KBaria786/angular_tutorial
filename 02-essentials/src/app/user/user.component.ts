import { Component, computed, EventEmitter, Input, input, InputSignal, Output, output } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({required: true}) avatar !: string;
  // @Input({required: true}) name !: string;

  // id = input.required<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();

  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;

  @Output() select: EventEmitter<string> = new EventEmitter<string>();
  // select = output<string>();

  // imagePath = computed(() => `assets/users/${this.user().avatar}`);

  get imagePath() {
    return "assets/users/" +  this.user?.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user?.id)
  }
}
