import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopularMoviesComponent } from './views/popular-movies/popular-movies.component';
import {LatestMoviesComponent} from './views/latest-movies/latest-movies.component';
import {NowPlayingMoviesComponent} from './views/now-playing-movies/now-playing-movies.component';

const routes: Routes = [
  {path: 'popular-movies', component: PopularMoviesComponent},
  {path: 'latest-movies', component: LatestMoviesComponent},
  {path: 'playing-movies', component: NowPlayingMoviesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
