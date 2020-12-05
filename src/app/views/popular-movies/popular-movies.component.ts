import {Component, OnInit} from '@angular/core';
import {Movie} from '../../model/movie';
import {MovieService} from '../../service/movie-service.service';

@Component({
    selector: 'app-popular-movies',
    templateUrl: './popular-movies.component.html',
    styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent implements OnInit {

    popularMovies: Movie[];

    constructor(private movieService: MovieService
    ) {
    }

    ngOnInit(): void {
        this.getPopularMovies();
    }

    getPopularMovies(): void {
        this.movieService.getPopularMovies().subscribe(data => {
            this.popularMovies = data.results;
        });
    }
}
