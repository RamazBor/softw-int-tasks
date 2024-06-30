import { Component, inject } from '@angular/core';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { FilmFacade } from './facade/film.facade';

@Component({
  selector: 'app-task-2',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './task-2.component.html',
  styleUrl: './task-2.component.scss'
})
export class Task2Component {
  filmFacade: FilmFacade = inject(FilmFacade);

  films$ = this.filmFacade.getFilms();
}
