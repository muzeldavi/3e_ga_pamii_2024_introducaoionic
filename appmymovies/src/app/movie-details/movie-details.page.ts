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
    private readonly actRoute: ActivatedRoute
  ) {
    this.movieId = this.actRoute.snapshot.params['id']
    console.log (`ID do Filme escolhido: ${this.movieId} `)
   }

  ngOnInit() {
  }

}