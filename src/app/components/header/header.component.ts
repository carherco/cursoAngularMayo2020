import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username: string;

  constructor(private auth: AuthService) {
  }

  ngOnInit(): void {
  }

  isLogged() {
    return this.auth.isLogged();
  }

  getUsername() {
    return this.auth.getUsername();
  }

  logout() {
    this.auth.logOut();
  }

}
