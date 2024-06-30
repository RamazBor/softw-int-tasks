import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  // apiUrl: string = 'https://online-movie-database.p.rapidapi.com/title/v2/find?title=starwars&limit=20&paginationKey=0&sortArg=moviemeter%2Casc';

  apiUrl: string = 'https://imdb_api4.p.rapidapi.com/get_movies_by_cast_name';

  http: HttpClient = inject(HttpClient);

  getFilms() {
    return this.http.get(`${this.apiUrl}`);
  }
}
