import { Component, HostListener } from '@angular/core';
import { AuthService } from 'src/app/Core/Services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(public _AuthService: AuthService) {

  }
  navChange: boolean = false;
  @HostListener('document:scroll')
  changeNavbar() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      this.navChange = true
    } else {
      this.navChange = false
    }
  }
}
