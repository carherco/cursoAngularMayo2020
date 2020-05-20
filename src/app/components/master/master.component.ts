import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  users: User[];  // Array<User>
  newUser: User;
  userSelected: User;

  constructor(private userManager: UserService) {
    this.users = this.userManager.get();
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
