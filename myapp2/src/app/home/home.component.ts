import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myVar:any;

  constructor(private sanitizer:DomSanitizer) {
    let string = this.sanitizer.bypassSecurityTrustHtml("<h1>hello</h1>")
    this.myVar = string;
   }

  ngOnInit() {
  }

}
