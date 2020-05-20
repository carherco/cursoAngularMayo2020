import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username;
  password;
  message;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  doLogin() {
    const loginOk = this.auth.logIn(this.username, this.password);
    this.message = loginOk ? 'Login correcto' : 'Login INCORRECTO';
  }

}
