import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Portal de Filmes';
    links: any[] = ['/popular-movies', '/latest-movies', '/playing-movies'];
    activeLink = this.links[0];

    constructor(private router: Router) {
    }

    ngOnInit(): void {
        this.navigateToPopular();
    }

    refresh(): void {
        window.location.reload();
    }

    navigateToPopular(): void {
        this.router.navigate([this.links[0]]);
        this.activeLink = this.links[0];
    }

    navigateToLatest(): void {
        this.router.navigate([this.links[1]]);
        this.activeLink = this.links[1];
    }

    navigateToNowPlaying(): void {
        this.router.navigate([this.links[2]]);
        this.activeLink = this.links[2];
    }
}
