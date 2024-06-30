import { Injectable, inject } from '@angular/core';
import { FilmService } from '../service/film.service';
import { map } from 'rxjs';
import { Film } from '../interface/film';

@Injectable({
  providedIn: 'root'
})
export class FilmFacade {
  filmService: FilmService = inject(FilmService);

  getFilms() {
    return this.filmService.getFilms().pipe(
      map((film: Film[]) =>  film)
    )
  }

}
