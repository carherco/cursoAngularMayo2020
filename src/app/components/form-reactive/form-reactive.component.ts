import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {

  user: User;
  userForm: FormGroup;
  usernameControl: FormControl;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private fb: FormBuilder) {

    this.user = new User();
    this.user.address = {};

    this.route.params.subscribe(
       (params: Params) => {
         this.user =  this.userService.getOne(+params.id);
         this.buildForm();
         // this.userForm.setValue(this.user);
         this.userForm.patchValue(this.user);
       }
    );
  }

  ngOnInit(): void {
  }

  buildForm() {
    this.usernameControl = new FormControl(this.user.username, [Validators.required]);

    this.userForm = this.fb.group( {
      name: [this.user.name, Validators.required],
      username: this.usernameControl,
      email: [this.user.email, [Validators.email, Validators.required] ],
      address: this.fb.group({
        street: this.user.address.street,
        city: this.user.address.city,
        zipcode: this.user.address.zipcode,
      })
    });

    this.usernameControl.value;
    this.userForm.value;
    this.userForm.setValidators([]);

    this.userForm.addControl('phone', new FormControl('234234'));
    this.userForm.removeControl('phone');
    let addressControl = this.userForm.get('address');

    let phonesControl = new FormArray([]);
    phonesControl.push(new FormControl());
    phonesControl.removeAt(0);

    this.usernameControl.valueChanges.subscribe(
      newValue => console.log(newValue)
    );

    this.userForm.get('address').valueChanges.subscribe(
      newAddress => console.log(newAddress)
    );
  }

  submit() {
    this.user = this.userForm.value;
  }

}
