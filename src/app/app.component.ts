import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Movlflx';
  scrollBtn: boolean = false

  goUp() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
  @HostListener('document:scroll')
  scrollBtnBottom() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      this.scrollBtn = true
    } else {
      this.scrollBtn = false
    }
  }
}

