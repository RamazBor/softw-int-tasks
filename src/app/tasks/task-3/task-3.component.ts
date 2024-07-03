import { Component } from '@angular/core';
import { MyPipePipe } from './pipes/my-pipe.pipe';

@Component({
  selector: 'app-task-3',
  standalone: true,
  imports: [MyPipePipe],
  templateUrl: './task-3.component.html',
  styleUrl: './task-3.component.scss',
})
export class Task3Component {
  resDate: Date = new Date(
    '2023-08-10T09:42:34.0734574Z'
  );
  resString: string = 'Hello World';
  resNumber: number = 12345;
}
