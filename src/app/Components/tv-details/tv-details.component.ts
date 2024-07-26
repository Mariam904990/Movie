import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvShowService } from 'src/app/Core/Services/tv-show.service';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.scss']
})
export class TvDetailsComponent {
  constructor(public _TvShowService: TvShowService, private _ActivatedRoute: ActivatedRoute) {
    _ActivatedRoute.params.subscribe((params) => {
      // console.log(params['id']);
      _TvShowService.getTvShowDetails(params['id']).subscribe({
        next: (response) => {
          this.seriesDetails = response
          console.log(this.seriesDetails);
          _TvShowService.gettvShowCredits(params['id']).subscribe({
            next: (response) => {
              // console.log(response);
              this.seriesCredits = response.cast
              // console.log(this.seriesCredits);
              _TvShowService.getSeriesByGenre(this.seriesDetails.genres[0].name).subscribe({
                next: (response) => {
                  console.log(response);
                  this.recommendedSeries=response.results
                }
              })


            }
          })
        }
      })
    })
  }
  seriesDetails!: any
  seriesCredits!: any[]
  recommendedSeries!: any[]
}
