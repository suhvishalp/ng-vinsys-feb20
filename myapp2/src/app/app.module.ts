import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component'
import { ShortenPipe } from './mypipes/shorten.pipe';
import { LoggerService } from './myservices/logger.service';
import { PostsComponent } from './posts/posts.component';
import {HttpClientModule} from '@angular/common/http';
import { MoviesComponent } from './movies/movies.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    UserRegistrationFormComponent,
    ShortenPipe,
    PostsComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
