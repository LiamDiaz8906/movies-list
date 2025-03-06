import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieSearchComponent } from "./components/movie-search/movie-search.component";
import { MovieListComponent } from "./components/movie-list/movie-list.component";
import { MovieDetailComponent } from "./components/movie-detail/movie-detail.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MovieSearchComponent, MovieListComponent, MovieDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'movies-list';
}
