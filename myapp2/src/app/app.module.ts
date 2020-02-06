import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component'
import { ShortenPipe } from './mypipes/shorten.pipe';
import { LoggerService } from './myservices/logger.service';
import { PostsComponent } from './posts/posts.component';
import {HttpClientModule} from '@angular/common/http';
import { MoviesComponent } from './movies/movies.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component'
import {Routes, RouterModule} from '@angular/router';
import { MyErrorHandler } from './myservices/handleerror.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LogoutComponent } from './logout/logout.component';
import { MovieGuard } from './myservices/movie-guard.service';
import { AdminGuard } from './myservices/admin-guard.service';

const appRoutes:Routes = [
  {path : '', component: HomeComponent},
  {path : 'login', component: LoginFormComponent},
  {path : 'register', component : UserRegistrationFormComponent},
  {path : 'movies', canActivate:[MovieGuard], component: MoviesComponent},
  {path : 'logout', component: LogoutComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    UserRegistrationFormComponent,
    ShortenPipe,
    PostsComponent,
    MoviesComponent,
    NavbarComponent,
    HomeComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    {provide:ErrorHandler, useClass:MyErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
