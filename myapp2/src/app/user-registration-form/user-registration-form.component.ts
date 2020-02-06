import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { MyCustomValidators } from '../myvalidators/MyCustomValidators';
import { LoggerService } from '../myservices/logger.service';
import { UserService } from '../myservices/user.service';

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.css']
})
export class UserRegistrationFormComponent implements OnInit {

  public userForm: FormGroup;
  
  public get email(){
    return this.userForm.get('email')
  }

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      email : new FormControl('', [Validators.required, MyCustomValidators.shouldNotContainSpace]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
      name: new FormControl('Vishal', Validators.required)
    })
  }

  

  register(){
    this.userService.registerUser(this.userForm.value)
        .subscribe(
          (response)=>{
            console.log('User Registered', response)
            //get the token from custom header 'x-auth-token'
            //console.log(response.headers.get('x-auth-token'))
            //store it in localStorage
            //redirect to home page
          },
          (errorMessage)=>{
            alert(errorMessage)
          }
        )
  }

}
