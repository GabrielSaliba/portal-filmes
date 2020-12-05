import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MovieService} from './service/movie-service.service';
import {Movie} from './model/movie';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Portal de Filmes';
    links: any[] = ['/popular-movies', '/latest-movies', '/playing-movies', '/popular-shows'];
    activeLink = this.links[0];
    searchString: string;
    searchedMovies: Movie[];

    constructor(private router: Router, private movieService: MovieService) {
    }

    ngOnInit(): void {
        this.navigateToPopular();
    }

    refresh(): void {
        window.location.reload();
    }

    navigateToPopular(): void {
        this.clearSearch();
        this.router.navigate([this.links[0]]);
        this.activeLink = this.links[0];
    }

    navigateToLatest(): void {
        this.clearSearch();
        this.router.navigate([this.links[1]]);
        this.activeLink = this.links[1];
    }

    navigateToNowPlaying(): void {
        this.clearSearch();
        this.router.navigate([this.links[2]]);
        this.activeLink = this.links[2];
    }

    navigateToPopularShows(): void {
        this.clearSearch();
        this.router.navigate([this.links[3]]);
        this.activeLink = this.links[3];
    }

    searchMovies(): void {
        if (this.searchString !== '') {
            this.activeLink = null;
            this.getSearchedMovies(this.searchString);
        } else {
            this.activeLink = this.links[0];
        }
    }

    clearSearch(): void {
        this.searchString = '';
    }

    getSearchedMovies(searchString: string): void {
        this.movieService.searchMovie(searchString).subscribe(data => {
            this.searchedMovies = data.results;
        });
    }
}
