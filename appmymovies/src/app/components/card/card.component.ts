import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/angular/standalone';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, RouterLink ]
})
export class CardComponent  implements OnInit {
  @Input() movie: Movie | undefined
  readonly imageSize: string = 'https://image.tmdb.org/t/p/w500/'

  constructor() { }

  ngOnInit() {}

}
