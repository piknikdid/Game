import {Injectable} from '@angular/core';
import{Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class TaskService{
    constructor(private http:Http){
        console.log('Task Service Initialized....');
    }

    getTasks(){
        return this.http.get('/api/users')
        .map(res => res.json());
    }

    addUser(newUser:any){
        var headers = new Headers();
        headers.append('Content-Type','application/json');
        return this.http.post('/api/user', JSON.stringify(newUser),{headers : headers})
        .map(res=> res.json())
    }

    getHeroes(){
        return this.http.get('/api/heroess')
        .map(res => res.json());
    }
}
