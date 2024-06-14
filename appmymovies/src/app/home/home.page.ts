import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/angular/standalone';
import { TmdbService } from '../services/tmdb/tmdb.service';
import { Movie } from '../models/movie';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../components/card/card.component';
import { CardsListComponent } from '../components/cards-list/cards-list.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, HttpClientModule, CommonModule, RouterLink, IonList, IonItem, CardComponent, CardsListComponent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent ],
  providers: [TmdbService]
})
export class HomePage implements OnInit{
  readonly imageSize: string = 'https://image.tmdb.org/t/p/w500/'
  readonly movies: Movie[] = [];

  constructor(
    private readonly service: TmdbService,
  ) {}

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies() {
    this.service.getMovies().subscribe({
      next: (movies: Movie[]) => {
        this.movies.push(...movies);

        console.log(movies);
      },
      error: (erro: any) => {
        console.error(erro);
      }
    });
  }
}