import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { MyCustomValidators } from '../myvalidators/MyCustomValidators';

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.css']
})
export class UserRegistrationFormComponent implements OnInit {

  private userForm: FormGroup;

  public get email(){
    return this.userForm.get('email')
  }

  constructor() { }

  ngOnInit() {
    this.userForm = new FormGroup({
      email : new FormControl('', [Validators.required, MyCustomValidators.shouldNotContainSpace]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
      name: new FormControl('Vishal', Validators.required)
    })
  }

  

  register(){
    console.log(this.userForm)
  }

}
