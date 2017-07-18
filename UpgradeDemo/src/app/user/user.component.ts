import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent {
  @Input() username: string;
  @Output() fromOutside: EventEmitter<string> = new EventEmitter();
  constructor() {}
  onClick() {
    this.fromOutside.emit(`Hello ${this.username} from the outside!`);
  }
}
