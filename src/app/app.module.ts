import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {PopularMoviesComponent} from './views/popular-movies/popular-movies.component';
import {HttpClientModule} from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';
import {LatestMoviesComponent} from './views/latest-movies/latest-movies.component';
import {NowPlayingMoviesComponent} from './views/now-playing-movies/now-playing-movies.component';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import { PopularShowsComponent } from './views/popular-shows/popular-shows.component';

@NgModule({
    declarations: [
        AppComponent,
        PopularMoviesComponent,
        LatestMoviesComponent,
        NowPlayingMoviesComponent,
        PopularShowsComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        HttpClientModule,
        MatTabsModule,
        MatCardModule,
        MatMenuModule,
        FlexLayoutModule,
        MatInputModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
