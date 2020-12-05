import { Component, OnInit } from '@angular/core';
import {Movie} from '../../model/movie';
import {MovieService} from '../../service/movie-service.service';

@Component({
  selector: 'app-now-playing-movies',
  templateUrl: './now-playing-movies.component.html',
  styleUrls: ['./now-playing-movies.component.css']
})
export class NowPlayingMoviesComponent implements OnInit {

  playingMovies: Movie[];

  constructor(private movieService: MovieService
  ) {
  }

  ngOnInit(): void {
    this.getPlayingMovies();
  }

  getPlayingMovies(): void {
    this.movieService.getPlayingMovies().subscribe(data => {
      this.playingMovies = data.results;
    });
  }
}
