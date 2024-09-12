import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonCard, 
  IonCardHeader, 
  IonCardSubtitle
} from '@ionic/angular/standalone';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    IonCard, 
    IonCardHeader, 
    IonCardSubtitle, 
    RouterLink 
  ]
})
export class CardComponent  implements OnInit {
  @Input() movie: Movie | undefined
  readonly imageSize: string = 'https://image.tmdb.org/t/p/w500/'
  readonly txtReleaseDate: string = 'Lançamento';
  poster: string= '';

  constructor() { }

  ngOnInit() {
    this.poster = `${this.imageSize}/${this.movie?.posterPath}`
  }

}
