import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent implements OnInit {

  user: User;

  constructor(private userService: UserService) {
    this.user = this.userService.getOne(3);
  }

  ngOnInit(): void {  }

  submit() {
    // Hacer algo con this.user
  }
}
