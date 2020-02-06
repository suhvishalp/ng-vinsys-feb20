import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie.model';
import { MovieService } from '../myservices/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

   movies:Movie[];
   errMsg:string;

  constructor(private movieService:MovieService) { }

  ngOnInit() {
    this.movies = []
    this.movieService.getAllMovies()
        .subscribe(
          (response)=>{
            console.log('Received response successfully!...')
            console.log(response)
            this.movies = response;
          },
          (errormessage)=>{
            this.errMsg = errormessage;
          }
        )
  }

  removeMovie(movie){
      this.movieService.removeMovie(movie._id)
              .subscribe(
                (response)=>{
                  console.log('movie delete', response)
                  this.movies= this.movies.filter(m=>m._id!=movie._id)
                },
                (error)=>{
                  console.log(error)
                }
              )
  }
}
