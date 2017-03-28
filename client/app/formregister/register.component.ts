import { Component } from '@angular/core';
import { TaskService } from '../service/task.service';
import {User} from './User';



@Component({
    moduleId: module.id,
    selector: 'register',
    templateUrl: 'register.component.html'
})
export class RegisterComponent  {
  users: User[];
  email: string;
  password: string;

  constructor(private taskService: TaskService ){
        this.taskService.getTasks()
        .subscribe( users => {
            this.users = users;
        });
}
  addUser (event : any){
    event.preventDefault();
          var newUser = {
            email : this.email,
            password: this.password
          }
          this.taskService.addUser(newUser)
        .subscribe(user => {
            this.users.push(user);
        });
}
}
