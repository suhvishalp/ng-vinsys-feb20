import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
    const observable = this.http.get('https://jsonplaceholder.typicode.com/posts')
    observable.subscribe(
      (response)=>{
        console.log('Response Success!...')
        console.log(response)
      }
    )
  }

}
