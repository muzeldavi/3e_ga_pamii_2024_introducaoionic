import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonButtons, 
  IonBackButton 
} from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { TmdbService } from '../services/tmdb/tmdb.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule, 
    IonButtons, 
    IonBackButton
  ]
})
export class MovieDetailsPage implements OnInit {
  pageTitle: string = "MyMovies - Detalhes"
  movieId: string = '';

  constructor(
    private readonly actRoute: ActivatedRoute, 
    private readonly tmdbService: TmdbService
  ) {
    this.movieId = this.actRoute.snapshot.params['id']
    console.log (`ID do Filme escolhido: ${this.movieId} `)
   }

  ngOnInit() {
    this.loadMovieDetails();
  }

  loadMovieDetails(): void {
    this.tmdbService.getMovieDetails(this.movieId)
    .subscribe({
      next: (data: any) => {
        console.log('MovieDetails');
        console.log(data);
      },
      error: (erro:any) => {
        console.log(erro);
      }
    });

    this.tmdbService.getMovieCredits(this.movieId)
    .subscribe({
      next: (data: any) => {
        console.log('MovieCredits');
        console.log(data);
      },
      error: (erro:any) => {
        console.log(erro);
      }
    });

    this.tmdbService.getMovieImages(this.movieId)
    .subscribe({
      next: (data: any) => {
        console.log('MovieImages');
        console.log(data);
      },
      error: (erro:any) => {
        console.log(erro);
      }
    });

    this.tmdbService.getMovieVideos(this.movieId)
    .subscribe({
      next: (data: any) => {
        console.log('MovieVideos');
        console.log(data);
      },
      error: (erro:any) => {
        console.log(erro);
      }
    });
  }

}