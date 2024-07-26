import { Component, OnDestroy, Output, Renderer2, ViewChild, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/Core/Services/movies.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  constructor(public _MoviesService: MoviesService) {
    // console.log('launched');
    this._MoviesService.moviesDiscover(1).subscribe({
      next: (response) => {
        // console.log(response);
        this.length = response.total_pages
        this.moviesContainer = response.results;
        console.log(this.moviesContainer);
      }
    })
  }
  
  searchByName(name: string) {
    this._MoviesService.searchByName(name).subscribe({
      next: (response) => {
        console.log(response);
      }
    })
  }
  searchForMovies(term:string){
    this._MoviesService.searchByName(term).subscribe({
      next:(response)=>{
        console.log(response);
        this.moviesContainer=response.results
        this.length = response.total_pages
      }
    })
  }
  // changeGenre(genre:string){
  //   console.log(genre);
  //   this._MoviesService.getMoviesByGenre(genre).subscribe({
  //     next:(response)=>{
  //       console.log(response.results);
  //       this.moviesContainer=response.results;
  //     }
  //   })
  //   // this._Router
  // }
  moviesGenres!: any[]
  moviesContainer!: any[]
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
    this._MoviesService.moviesDiscover(this.pageIndex).subscribe({
      next: (response) => {
        console.log(response);
        this.length = response.total_pages
        this.moviesContainer = response.results;
      }
    })
  }
}
