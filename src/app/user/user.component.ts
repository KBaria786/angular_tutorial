import { Component, signal, computed } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // selectedUser = DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)]
  selectedUser = signal(DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)])
  imagePath = computed(() => "assets/users/" + this.selectedUser().avatar)

  // get imagePath() {
  //   return "assets/users/" + this.selectedUser.avatar
  // }

  onSelectUser() {
    // this.selectedUser = DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)]
    this.selectedUser.set(DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)])
  }
}
