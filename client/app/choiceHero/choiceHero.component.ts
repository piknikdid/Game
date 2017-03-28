import { Component } from '@angular/core';
import { TaskService } from '../service/task.service';
import{Hero} from './Hero';
import{User} from '../formregister/User'



@Component({
    moduleId: module.id,
  selector: 'hero',
  templateUrl: 'choiceHero.component.html',
  styleUrls:['choiceHero.component.css']

})
export class ChoiceHeroComponent  {
heroes : Hero[];
users: User[];

  constructor(private taskService: TaskService ){
        this.taskService.getHeroes()
        .subscribe( heroes => {
            this.heroes = heroes;

        });
        this.taskService.getTasks()
        .subscribe( users => {
            this.users = users;
        });
}
}
