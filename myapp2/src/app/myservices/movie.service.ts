import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Movie } from '../model/movie.model';
import {catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiEndPoint = 'http://localhost:3900/api/movies'

  constructor(private http:HttpClient) { }

  public getAllMovies():Observable<Movie[]>{
     return this.http.get<Movie[]>(this.apiEndPoint)                   
  }

  public removeMovie(movieId){
    const token = localStorage.getItem('token')
    const headers = new HttpHeaders({
      'x-auth-token': token
    });
    
    return this.http.delete<Movie>(this.apiEndPoint+'/'+movieId, {headers})
  }

}
