import { Component, OnInit } from '@angular/core';
import { USERS } from 'src/app/data/users';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  users: User[] = USERS;
  newUser: User;
  userSelected: User;

  constructor() {
    this.newUser = new User(11);
  }

  ngOnInit(): void {

  }

  selectUser(user: User) {
    this.userSelected = user;
    // this.userSelected = { ...user };
  }

  add() {
    this.users.push(this.newUser);
  }

  deleteV1(user: User) {
    this.users = this.users.filter( u => u.id !== user.id );
  }

  // deleteV2(indice: number) {
  //   this.users.splice(indice, 1);
  // }

  // deleteV3(userId: number) {
  //   this.users = this.users.filter( u => u.id !== userId );
  // }

}
