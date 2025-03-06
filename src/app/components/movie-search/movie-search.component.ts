import { Component, inject } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { FormsModule } from '@angular/forms';
import { Movie } from '../../interfaces/movie.interface';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';

@Component({
  selector: 'app-movie-search',
  standalone: true,
  imports: [FormsModule, MovieDetailComponent],
  templateUrl: './movie-search.component.html',
  styleUrl: './movie-search.component.scss'
})
export class MovieSearchComponent {
  movieService = inject(MovieService)
  query = ''

  searchMovies() {
    this.movieService.searchMovies(this.query)
  }

  showDetails(imdbID: string) {
    this.movieService.getMovieDetails(imdbID)
  }

  addToFavorites(movie: Movie) {
    this.movieService.addToFavorites(movie)
  }
}
