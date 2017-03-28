import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpModule } from "@angular/http";
import {FormsModule} from '@angular/forms'
import { RouterModule }   from '@angular/router';


import { AppComponent }  from './app.component';
import {RegisterComponent} from './formregister/register.component'
import {ChoiceHeroComponent} from './choiceHero/choiceHero.component'



@NgModule({
  imports:[
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
    {
      path: 'heroes',
      component: ChoiceHeroComponent
    },
    {
      path: 'registration',
      component: RegisterComponent
    }
  ])
],
  declarations: [ AppComponent, RegisterComponent, ChoiceHeroComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
