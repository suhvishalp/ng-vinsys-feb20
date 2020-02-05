import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { MyCustomValidators } from '../myvalidators/MyCustomValidators';
import { LoggerService } from '../myservices/logger.service';

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.css']
})
export class UserRegistrationFormComponent implements OnInit {

  private userForm: FormGroup;
  private doj:Date = new Date('02/04/2020')
  private description:string ='Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.'

  public get email(){
    return this.userForm.get('email')
  }

  constructor(private logger:LoggerService) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      email : new FormControl('', [Validators.required, MyCustomValidators.shouldNotContainSpace]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
      name: new FormControl('Vishal', Validators.required)
    })
  }

  

  register(){
     
    this.logger.log('some message')
  }

}
