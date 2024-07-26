import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankLayoutComponent } from './Layouts/blank-layout/blank-layout.component';
import { HomeComponent } from './Components/home/home.component';
import { BlogComponent } from './Components/blog/blog.component';
import { ContactComponent } from './Components/contact/contact.component';
import { MoviesComponent } from './Components/movies/movies.component';
import { AuthLayoutComponent } from './Layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { authGuard } from './Core/Guards/auth.guard';
import { TvShowsComponent } from './Components/tv-shows/tv-shows.component';
import { MovieDetailsComponent } from './Components/movie-details/movie-details.component';
import { TvDetailsComponent } from './Components/tv-details/tv-details.component';

const routes: Routes = [
  {
    path: '', component: BlankLayoutComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, title: 'Home', canActivate: [authGuard] },
      { path: 'blog', component: BlogComponent, title: 'Blog' },
      { path: 'contact', component: ContactComponent, title: 'Contact' },
      { path: 'movies', component: MoviesComponent, title: 'Movies' },
      { path: 'movie/:id', component: MovieDetailsComponent, title: 'Movie Details' },
      { path: 'tv/:id', component: TvDetailsComponent, title: 'Tv Show Details' },
      { path: 'tv', component: TvShowsComponent, title: 'TV-Shows' },
    ]
  },
  {
    path: '', component: AuthLayoutComponent, children: [
      { path: 'login', component: LoginComponent, title: 'Login' },
      { path: 'register', component: RegisterComponent, title: 'Register' }
    ]
  },
  { path: '**', component: NotFoundComponent, title: 'Not Found Page' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
