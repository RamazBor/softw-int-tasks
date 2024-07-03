import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../interface/film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  apiUrl: string = 'https://imdb_api4.p.rapidapi.com/get_movies_by_cast_name';

  http: HttpClient = inject(HttpClient);

  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(`${this.apiUrl}`);
  }
}
