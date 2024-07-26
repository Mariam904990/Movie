import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  constructor() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
}
