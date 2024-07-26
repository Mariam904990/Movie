import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blank-layout',
  templateUrl: './blank-layout.component.html',
  styleUrls: ['./blank-layout.component.scss']
})
export class BlankLayoutComponent {
  constructor(private _Router: Router) {
    if (localStorage.getItem('token') == null){
      _Router.navigate(['/login'])
    }
  }
}
