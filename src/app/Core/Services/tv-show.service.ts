import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TvShowService {
  constructor(private _httpClient: HttpClient) { }
  path: string = 'https://image.tmdb.org/t/p/w500'

  getTvShows(): Observable<any> {
    return this._httpClient.get(`https://api.themoviedb.org/3/genre/tv/list?language=en`, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYjIyYWE1ZWE5MzdhOWFhYjkzNTliODY0MzhlYTlmNCIsInN1YiI6IjYzZTc3ZTgxZDM4OGFlMDA4MDYxNjE1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7_bMCiD9AjLS4UatlOwtjbfj2kbx9dvz9Y9ZnFR6aWs`,
        accept: `application/json`
      }
    })
  }

  getAllTvShows(page: number): Observable<any> {
    return this._httpClient.get(`https://api.themoviedb.org/3/discover/tv?api_key=2b22aa5ea937a9aab9359b86438ea9f4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${page}`)
  }

  searchByName(name: string) {
    return this._httpClient.get(`https://api.themoviedb.org/3/search/tv?query=${name}&include_adult=false&language=en-US&page=1`, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYjIyYWE1ZWE5MzdhOWFhYjkzNTliODY0MzhlYTlmNCIsInN1YiI6IjYzZTc3ZTgxZDM4OGFlMDA4MDYxNjE1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7_bMCiD9AjLS4UatlOwtjbfj2kbx9dvz9Y9ZnFR6aWs`,
        accept: `application/json`
      }
    })
  }
  getTvShowDetails(seriesId: number): Observable<any> {
    return this._httpClient.get(`https://api.themoviedb.org/3/tv/${seriesId}?language=en-US`, {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYjIyYWE1ZWE5MzdhOWFhYjkzNTliODY0MzhlYTlmNCIsInN1YiI6IjYzZTc3ZTgxZDM4OGFlMDA4MDYxNjE1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7_bMCiD9AjLS4UatlOwtjbfj2kbx9dvz9Y9ZnFR6aWs',
        accept: 'application/json'
      }
    })
  }
  gettvShowCredits(seriesId: number): Observable<any> {
    return this._httpClient.get(`https://api.themoviedb.org/3/tv/${seriesId}/credits?language=en-US`, {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYjIyYWE1ZWE5MzdhOWFhYjkzNTliODY0MzhlYTlmNCIsInN1YiI6IjYzZTc3ZTgxZDM4OGFlMDA4MDYxNjE1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7_bMCiD9AjLS4UatlOwtjbfj2kbx9dvz9Y9ZnFR6aWs',
        Accept: 'application/json'
      }
    })
  }

  getSeriesByGenre(genre:string):Observable<any>{
    return this._httpClient.get(`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre}`,{
      headers:{
        Authorization:`bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYjIyYWE1ZWE5MzdhOWFhYjkzNTliODY0MzhlYTlmNCIsInN1YiI6IjYzZTc3ZTgxZDM4OGFlMDA4MDYxNjE1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7_bMCiD9AjLS4UatlOwtjbfj2kbx9dvz9Y9ZnFR6aWs`,
        Accept:`application/json`
      }
    })
  }
}
