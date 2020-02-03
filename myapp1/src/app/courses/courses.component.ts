import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  private courses:Course[];

  constructor() { }

  ngOnInit() {
    this.courses = [
      new Course(1, 'Angular','5 Days','Vishal'),
      {cid:2, cname:'React', duration:'7 Days', trainer:'Vishal'},
      {cid:3, cname:'NodeJS', duration:'3 Days', trainer:'PQR'}
    ]
  }

  handleAddCourse(){
    let newCourse = {cid:4, cname:'MongoDB', duration:'10 Days', trainer:'PQR'}
    this.courses.push(newCourse)
  }
}
