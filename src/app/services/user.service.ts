import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { USERS } from '../data/users';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // users: User[] = USERS;
  users: User[] = [];
  url = environment.apiUrl + 'users';

  constructor(private http: HttpClient) {
  }

  // get(): Observable<User[]> {
  //   return this.http.get<User[]>(this.url);
  //   // return of(USERS);
  // }

  get(email: string = ''): Observable<User[]> {

    let url = this.url;
    if (email) {
      url = url + '?email=' + email;
    }

    return this.http.get<User[]>(url);
    // return of(USERS);
  }

  getOne(id): User {
    return this.users.find( u => u.id === id );
  }

  add(user: User) {

  }

  delete(user: User) {

  }
}
