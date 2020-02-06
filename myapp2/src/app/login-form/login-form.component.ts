import { Component, OnInit } from '@angular/core';
import { UserService } from '../myservices/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit() {
  }

  login(loginform){
    const {username:email, password} = loginform.value
    this.userService.login({email,password})
        .subscribe(
          (response)=>{
            console.log('Login Success', response)
            localStorage.setItem('token', response)
            //redirect to home page..
            this.router.navigate(['/movies'])
          },
          (error)=>{
            console.log(error)
          }
        )
  }

}
