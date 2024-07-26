import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { TvShowService } from 'src/app/Core/Services/tv-show.service';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss']
})
export class TvShowsComponent {
  constructor(public _TvShowService: TvShowService) {
    // console.log('launched');
    this._TvShowService.getAllTvShows(1).subscribe({
      next: (response) => {
        console.log(response);
        this.length = response.total_pages
        this.tvContainer = response.results;
      }
    })
  }
  
  searchByName(name: string) {
    this._TvShowService.searchByName(name).subscribe({
      next: (response) => {
        console.log(response);
      }
    })
  }
  moviesGenres!: any[]
  tvContainer!: any[]
  searchTerm!:string


  length = 50;
  pageSize = 1;
  pageIndex = 0;
  pageEvent!: PageEvent;
  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this._TvShowService.getAllTvShows(this.pageIndex).subscribe({
      next: (response) => {
        console.log(response);
        this.length = response.total_pages
        this.tvContainer = response.results;
      }
    })
  }

}
