import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Movie } from 'src/app/models/movie';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  private readonly URL_DISCOVER= `${environment.TMBD_URL}/discover/movie?language=pt-br`;

  private readonly HEADERS = {
    Accept: 'application/json',
    Authorization: `Bearer ${environment.TMBD_TOKEN}`
  };

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(
      this.URL_DISCOVER,
      {headers: this.HEADERS}
    ).pipe(
      map(
        (data: any) => {
          return data.results.map(
            (movie: any) => {
              const formatedMovie: Movie = {
                backdropPath: movie.backdrop_path,
                genres: [],
                id: movie.id,
                overview: movie.overview,
                popularity: movie.popularity,
                posterPath: movie.poster_path,
                releaseDate: movie.release_date,
                title: movie.title,
                video: movie.video,
                voteAverage: movie.vote_average,
                voteCount: movie.vote_count
              };

              return formatedMovie;
            }
          );
        }
      )
    );
    
  }
}