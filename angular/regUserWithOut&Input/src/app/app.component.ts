import { Component } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'regUserWithOut&Input';
  arr:User[] = []
  addUserSubscriber(e:User){
    this.arr.push(e)
    console.log(this.arr)
  }
}
