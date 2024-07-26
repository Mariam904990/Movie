import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MoviesService } from 'src/app/Core/Services/movies.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  constructor(public _MoviesService: MoviesService) {
    // console.log(this.element);
  }
  @Input() element!: any
  @Input() person: boolean = false
  @Input() key!: boolean
  link: string = ''

  ngOnInit(): void {
    if (this.key) {
      this.link = '/movie/' + this.element?.id
    } else {
      this.link = '/tv/' + this.element?.id
    }
  }
}
