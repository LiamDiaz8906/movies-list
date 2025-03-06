import { inject, Injectable, signal } from '@angular/core';
import { Movie } from '../interfaces/movie.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = '4593fcef'
  private apiUrl = `http://www.omdbapi.com/?apikey=${this.apiKey}`

  private http = inject(HttpClient)

  searchResults = signal<Movie[]>([])
  favorites = signal<Movie[]>([])
  selectedMovie = signal<Movie | null>(null)

  constructor() {
    const savedFavorites = localStorage.getItem('favorites')
    if (savedFavorites) {
      this.favorites.set(JSON.parse(savedFavorites))
    }
  }

  searchMovies(query: string) {
      this.http.get(`${this.apiUrl}&s=${query}`).subscribe((response: any) => {
        console.log('respuestaApi', response);
      if (response.Search) {
        this.searchResults.set(response.Search)
      } else {
        this.searchResults.set([])
      }
    })
  }

  getMovieDetails(imdbID: string) {
    this.http.get(`${this.apiUrl}&i=${imdbID}`).subscribe((response: any) => {
      if (response) {
        console.log(response);
        this.selectedMovie.set(response)
      }
    })
  }

  addToFavorites(movie: Movie) {
    const isDuplicate = this.favorites().some(m => m.imdbID === movie.imdbID)
    if (!isDuplicate) {
      this.favorites.update(favorites => [...favorites, movie])
      this.saveFavorites()
    }
  }

  removeFavorites(movieId: string) {
    this.favorites.update(favorites => favorites.filter(m => m.imdbID !== movieId))
  }

  saveFavorites() {
    localStorage.setItem('favorites', JSON.stringify(this.favorites()))
  }

}
