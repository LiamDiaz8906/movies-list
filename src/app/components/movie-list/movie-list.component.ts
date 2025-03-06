import { Component, inject } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent {
  movieService = inject(MovieService)

  removeFromFavorites(movieId: string) {
    this.movieService.removeFavorites(movieId)
  }
}
