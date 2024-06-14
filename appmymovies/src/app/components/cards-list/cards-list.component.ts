import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonList, IonItem } from '@ionic/angular/standalone';
import { CardComponent } from '../card/card.component';
import { Movie } from 'src/app/models/movie';


@Component({
  selector: 'app-cards-list',
  standalone: true,
  imports: [
    IonList, IonItem, CommonModule, CardComponent
  ],
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent {
  @Input() movies: Movie[] | undefined;

  constructor() { }

  ngOnInit() {
    console.log(this.movies);
  }
}