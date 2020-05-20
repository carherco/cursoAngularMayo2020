import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogged: boolean;
  username: string;

  constructor(private auth: AuthService) {
    this.isLogged = this.auth.isLogged();
    this.username = this.auth.getUsername();
  }

  ngOnInit(): void {
  }

  logout() {
    this.logout();
    this.isLogged = this.auth.isLogged();
  }

}
