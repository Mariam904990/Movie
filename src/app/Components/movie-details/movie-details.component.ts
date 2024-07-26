import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/Core/Services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {
  constructor(private _ActivatedRoute: ActivatedRoute, public _MoviesService: MoviesService) {
    _ActivatedRoute.params.subscribe((params) => {
      _MoviesService?.getMovieDetails(params['id']).subscribe({
        next: (response) => {
          this.movieDetails = response
          // console.log(this.movieDetails);
          this.genres = this.movieDetails?.genres
          // let h =  / 60
          // console.log(this.movieDetails?.runtime);
          _MoviesService.getMovieCredits(this.movieDetails.id).subscribe({
            next: (response) => {
              this.castTeam = response.cast
              this.crew = response.crew
              // console.log(this.castTeam);
            }
          })
          _MoviesService.getMoviesByGenre(this.genres[0].name).subscribe({
            next: (response) => {
              // console.log(response.results);
              this.recommendedMovies = response.results
            }
          })

        }
      })

    })
  }


  movieDetails!: any
  genres!: any[]
  recommendedMovies!: any[]
  castTeam!: any[]
  crew!: any[]
}

