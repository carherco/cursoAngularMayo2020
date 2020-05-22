import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Params } from '@angular/router';
import { HasUnsavedChanges } from 'src/app/guards/confirm.guard';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent implements OnInit, HasUnsavedChanges {

  user: User;

  constructor(private userService: UserService, private route: ActivatedRoute) {

    // this.user = new User();
    // this.user.address = {};

    // this.route.queryParams.subscribe(
    //   (params: Params) => {
    //     const id = +params.id;
    //     this.user = this.userService.getOne(id);
    //   }
    // );

    this.user = new User();
    this.user.address = {};
    this.route.params.subscribe(
       (params:Params)=> {
         let id = +params.id;
         this.user =  this.userService.getOne(id);
       }
    );



  }

  ngOnInit(): void {  }

  submit() {
    // Hacer algo con this.user
  }

  hasUnsavedChanges(): boolean {
    return true;
  }
}
