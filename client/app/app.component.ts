import { Component } from '@angular/core';
import { TaskService } from './service/task.service';



@Component({
    moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TaskService]
})
export class AppComponent  {}
