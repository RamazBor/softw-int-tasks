import { Injectable, inject } from '@angular/core';
import { FilmService } from '../service/film.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmFacade {
  filmService: FilmService = inject(FilmService);

  getFilms() {
    return this.filmService.getFilms().pipe(
      map((film: any) =>  film)
    );
  }

}
