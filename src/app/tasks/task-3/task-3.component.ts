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
    'Sat Apr 03 2000 13:46:40 GMT+0400 (Georgia Standard Time)'
  );
  resString: string = 'Hello World';
  resNumber: number = 12345;
}
