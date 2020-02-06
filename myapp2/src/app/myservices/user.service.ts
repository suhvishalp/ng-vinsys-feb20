import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {JwtHelper} from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiEndPoint ='http://localhost:3900/api/users'
  private url = 'http://localhost:3900/api/auth'

  constructor(private http:HttpClient) { }

  public registerUser(user){
    return this.http.post(this.apiEndPoint, user)
  }

  public login(user){
    
    return this.http.post(this.url,user,{responseType:'text'})
              
  }

  public isLoggedIn(){
    const token = localStorage.getItem('token')
    return token? true : false;
  }

  public getCurrentUser(){
    const token = localStorage.getItem('token')
    if(!token) return null;
    const helper = new JwtHelper();
    return helper.decodeToken(token)
  }

}
