import { Routes } from '@angular/router';
import {
  Task1Component,
  Task2Component,
  Task3Component,
  Task4Component,
  Task5Component,
} from './tasks';

export const routes: Routes = [
  {
    path: '',
    component: Task1Component,
  },
  {
    path: 'task-1',
    component: Task1Component,
  },
  {
    path: 'task-2',
    component: Task2Component,
  },
  {
    path: 'task-3',
    component: Task3Component,
  },
  {
    path: 'task-4',
    component: Task4Component,
  },
  {
    path: 'task-5',
    component: Task5Component,
  },
];
