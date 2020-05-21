import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import { of, fromEvent } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  users: User[] = [];  // Array<User>
  newUser: User;
  userSelected: User;

  @ViewChild('emailSearch', {static: true})
  emailRef: ElementRef;

  constructor(private userManager: UserService) {

    let obs = this.userManager.get();
    obs.subscribe(
      respuestaServer => this.users = respuestaServer,
      error => console.log(error),
      () => console.log('FIN')
    );

    this.newUser = new User(11);
  }

  ngOnInit(): void {
    const eventos$ = fromEvent(this.emailRef.nativeElement, 'keyup');
    eventos$
    .pipe(
      debounceTime(500),
      map( (keyboardEvent: any) => keyboardEvent.target.value ),
      filter( value => value.length > 3 ),
      distinctUntilChanged()
    )
    .subscribe(
      (value) => {
        this.userManager.get(value).subscribe(
          respuestaServer => this.users = respuestaServer,
        );
      }
    );
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
