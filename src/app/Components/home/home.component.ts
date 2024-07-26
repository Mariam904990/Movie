import { Component, HostListener } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/Core/Services/auth.service';
import { MoviesService } from 'src/app/Core/Services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private _MoviesService: MoviesService) {
    // this.getTrendingMovies()
    this.getTopRatedMovies()
    this.getUpComingMovies()
  }

  moviesSummary!: any[]
  topRatedMovies!: any[]

  getTrendingMovies() {
    this._MoviesService.getTrendingMovies().subscribe({
      next: (response) => {
        // console.log(response);
        // console.log(this.moviesSummary);
      }
    })
  }
  getTopRatedMovies() {
    this._MoviesService.getTopRatedMovies().subscribe({
      next: (response) => {
        // console.log(response.results);
        this.topRatedMovies = response.results
        // console.log();


      }
    })
  }
  getUpComingMovies() {
    this._MoviesService.getUpComingMovies().subscribe({
      next: (response) => {
        this.moviesSummary = response.results
      }
    })
  }
}
