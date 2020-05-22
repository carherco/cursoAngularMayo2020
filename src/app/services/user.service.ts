import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { USERS } from '../data/users';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { retry, map, tap } from 'rxjs/operators';

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

    return this.http.get<User[]>(url).pipe(
      retry(1),
      tap( r => { this.users = r; } )
    );
    // return of(USERS);
  }

  getOne(id: number): User {
    console.log('paso 2', id);
    console.log('paso 2b', USERS.find( u => u.id === id ));
    return USERS.find( u => u.id === id );


  }

  getOneObservable(id: number): Observable<User> {
    let url = this.url + '/' + id;
    return this.http.get<User>(url);

    let user = USERS.find( u => u.id === id );
    return of(user);
  }

  add(user: User) {

  }

  delete(user: User) {

  }
}
