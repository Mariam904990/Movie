import { environment } from './../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {

  constructor(private _HttpClient: HttpClient, private _Router: Router) {
    if (localStorage.getItem('token') != null) {
      this.isLogged.next(true);
      try {
        var decoded = jwt_decode(localStorage.getItem('token') || "");
        // console.log(decoded);
      } catch (error:any) {
        console.log(error);
        if(error.message){
          this.logout()
        }

      }
    }
  }

  isLogged = new BehaviorSubject(false)

  register(formData: object): Observable<any> {
    return this._HttpClient.post(environment.baseUrl + 'signup', formData)
  }

  login(formData: object): Observable<any> {
    return this._HttpClient.post(environment.baseUrl + 'signin', formData)
  }

  logout() {
    localStorage.removeItem('token');
    this.isLogged.next(false)
    this._Router.navigate(['/login'])
  }


  ngOnInit(): void {

  }
}
