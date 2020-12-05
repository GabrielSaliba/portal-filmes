import {Component, OnInit} from '@angular/core';
import {MovieService} from '../../service/movie-service.service';
import {Show} from '../../model/show';

@Component({
    selector: 'app-popular-shows',
    templateUrl: './popular-shows.component.html',
    styleUrls: ['./popular-shows.component.css']
})
export class PopularShowsComponent implements OnInit {

    popularShows: Show[];

    constructor(private movieService: MovieService
    ) {
    }

    ngOnInit(): void {
        this.getPopularShows();
    }

    getPopularShows(): void {
        this.movieService.getPopularShows().subscribe(data => {
            this.popularShows = data.results;
        });
    }
}
