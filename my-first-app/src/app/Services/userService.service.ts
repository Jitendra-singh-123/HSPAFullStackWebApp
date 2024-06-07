import { Injectable } from '@angular/core';
import { User } from '../model/User';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

constructor() { }
addUser(user:User){
  // localStorage.setItem('USER',JSON.stringify(user));
  let users=[];
  if(localStorage.getItem('Users')){
   users=JSON.parse(localStorage.getItem('Users'));
   users=[user,...users];
  }
  else{
   users=[user];
  }
  localStorage.setItem('Users',JSON.stringify(users));
 }
}
