import { Component, OnInit } from '@angular/core';
import {Movie} from '../../model/movie';
import {MovieService} from '../../service/movie-service.service';

@Component({
  selector: 'app-latest-movies',
  templateUrl: './latest-movies.component.html',
  styleUrls: ['./latest-movies.component.css']
})
export class LatestMoviesComponent implements OnInit {

  latestMovies: Movie[];

  constructor(private movieService: MovieService
  ) {
  }

  ngOnInit(): void {
    this.getLatestMovies();
  }

  getLatestMovies(): void {
    this.movieService.getLatestMovies().subscribe(data => {
      this.latestMovies = data.results;
    });
  }

}
