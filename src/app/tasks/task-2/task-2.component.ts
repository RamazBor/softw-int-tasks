import { Component, inject } from '@angular/core';
import { AsyncPipe, JsonPipe, NgFor } from '@angular/common';
import { FilmFacade } from './facade/film.facade';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { Film } from './interface/film';
import { map } from 'rxjs';


@Component({
  selector: 'app-task-2',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, MatCardModule, FormsModule, NgFor],
  templateUrl: './task-2.component.html',
  styleUrl: './task-2.component.scss'
})
export class Task2Component {
  filmFacade: FilmFacade = inject(FilmFacade);

  films$ = this.filmFacade.getFilms();

  search!: string;
  filteredFilms$!: any;

  getFilm() {
    if(this.search === null) {
      return
    }
    this.filteredFilms$ = this.films$.pipe(
      map((films: Film[]) => films.filter((film: Film) => film.title.includes(this.search))),
    )
  }
}
