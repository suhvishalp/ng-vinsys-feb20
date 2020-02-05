import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
              .pipe(catchError(this.handleError))      
  }



  handleError(error){
    console.log('handling errors in movieservice')
    console.log(error)
    let errorMessage = ''
    if(error.status >=400 && error.status<500){
      errorMessage = error.message;
     return throwError(errorMessage)
    }else{
      alert('something went wrong..Server error')
    }
    
    return throwError(error)
  }


}
