import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { USERS } from '../data/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[];

  constructor() {
  }

  get(): User[] {
    // this.users = this.httpService.get('https://midominio.com/api/users');
    return this.users;
  }

  add(user: User) {

  }

  delete(user: User) {

  }
}
