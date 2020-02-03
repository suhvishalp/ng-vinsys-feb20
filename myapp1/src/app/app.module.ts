import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CoursesComponent } from './courses/courses.component';
import {FormsModule} from '@angular/forms';
import { SingleCourseComponent } from './courses/single-course/single-course.component'
import { HighlightDirective } from './mydirectives/highlight.directive';
import { MyCustomDirectiveDirective } from './mydirectives/my-custom-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    CoursesComponent,
    SingleCourseComponent,
    HighlightDirective,
    MyCustomDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
