import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private _httpClient: HttpClient) { }
  path: string = 'https://image.tmdb.org/t/p/w500'

  getTrendingMovies(): Observable<any> {
    return this._httpClient.get(`https://api.themoviedb.org/3/trending/movie/week?language=en-US`, {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYjIyYWE1ZWE5MzdhOWFhYjkzNTliODY0MzhlYTlmNCIsInN1YiI6IjYzZTc3ZTgxZDM4OGFlMDA4MDYxNjE1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7_bMCiD9AjLS4UatlOwtjbfj2kbx9dvz9Y9ZnFR6aWs',
        Accept: 'application/json'
      }
    })
  }

  getTopRatedMovies(): Observable<any> {
    return this._httpClient.get(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`, {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYjIyYWE1ZWE5MzdhOWFhYjkzNTliODY0MzhlYTlmNCIsInN1YiI6IjYzZTc3ZTgxZDM4OGFlMDA4MDYxNjE1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7_bMCiD9AjLS4UatlOwtjbfj2kbx9dvz9Y9ZnFR6aWs',
        Accept: 'application/json'
      }
    })
  }

  getUpComingMovies(): Observable<any> {
    return this._httpClient.get(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`, {
      headers: {
        Authorization: ` Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYjIyYWE1ZWE5MzdhOWFhYjkzNTliODY0MzhlYTlmNCIsInN1YiI6IjYzZTc3ZTgxZDM4OGFlMDA4MDYxNjE1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7_bMCiD9AjLS4UatlOwtjbfj2kbx9dvz9Y9ZnFR6aWs`,
        accept: `application/json`
      }
    })
  }

  getMovieDetails(movieId: string): Observable<any> {
    return this._httpClient.get(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYjIyYWE1ZWE5MzdhOWFhYjkzNTliODY0MzhlYTlmNCIsInN1YiI6IjYzZTc3ZTgxZDM4OGFlMDA4MDYxNjE1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7_bMCiD9AjLS4UatlOwtjbfj2kbx9dvz9Y9ZnFR6aWs',
        accept: 'application/json'
      }
    })
  }

  getMoviesByGenre(genre: string): Observable<any> {
    return this._httpClient.get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre}`, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYjIyYWE1ZWE5MzdhOWFhYjkzNTliODY0MzhlYTlmNCIsInN1YiI6IjYzZTc3ZTgxZDM4OGFlMDA4MDYxNjE1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7_bMCiD9AjLS4UatlOwtjbfj2kbx9dvz9Y9ZnFR6aWs`,
        Accept: `application/json`
      }
    })
  }

  //movie cast and crew
  getMovieCredits(movieId: string): Observable<any> {
    return this._httpClient.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYjIyYWE1ZWE5MzdhOWFhYjkzNTliODY0MzhlYTlmNCIsInN1YiI6IjYzZTc3ZTgxZDM4OGFlMDA4MDYxNjE1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7_bMCiD9AjLS4UatlOwtjbfj2kbx9dvz9Y9ZnFR6aWs`,
        accept: `application/json`
      }
    })
  }


  searchByName(movieName: string): Observable<any> {
    return this._httpClient.get(`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`, {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYjIyYWE1ZWE5MzdhOWFhYjkzNTliODY0MzhlYTlmNCIsInN1YiI6IjYzZTc3ZTgxZDM4OGFlMDA4MDYxNjE1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7_bMCiD9AjLS4UatlOwtjbfj2kbx9dvz9Y9ZnFR6aWs',
        accept: 'application/json'
      }
    })
  }
  moviesDiscover(pageNumber:number):Observable<any>{
    return this._httpClient.get(`https://api.themoviedb.org/3/discover/movie?api_key=2b22aa5ea937a9aab9359b86438ea9f4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${pageNumber}`)
  }















  getMoviesGenres(): Observable<any> {
    return this._httpClient.get(`https://api.themoviedb.org/3/genre/movie/list?language=en`, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYjIyYWE1ZWE5MzdhOWFhYjkzNTliODY0MzhlYTlmNCIsInN1YiI6IjYzZTc3ZTgxZDM4OGFlMDA4MDYxNjE1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7_bMCiD9AjLS4UatlOwtjbfj2kbx9dvz9Y9ZnFR6aWs`,
        accept: `application/json`
      }
    })
  }
}
