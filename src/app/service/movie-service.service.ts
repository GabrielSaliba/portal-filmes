import { Injectable } from '@angular/core';
import {Utils} from '../shared/utils';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pagination} from '../model/pagination';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  apiUrl = `${Utils.API_URL}/movie`;
  apiKey = Utils.API_KEY;

  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
  };

  constructor(private http: HttpClient) { }

  public getPopularMovies(): Observable<Pagination> {
    return this.http.get<Pagination>(`${this.apiUrl}/popular`, {params: {api_key: this.apiKey}});
  }

}
