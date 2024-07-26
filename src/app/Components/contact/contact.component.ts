import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

}
