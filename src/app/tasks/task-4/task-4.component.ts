import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import moment from 'moment';

@Component({
  selector: 'app-task-4',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    NgClass
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './task-4.component.html',
  styleUrl: './task-4.component.scss',
})
export class Task4Component {
  currentMonth: moment.Moment;
  daysInMonth: number[];
  holidays: string[] = ['2024-07-04', '2024-07-14']; // Example holidays

  constructor() {
    this.currentMonth = moment();
    this.daysInMonth = [];
  }

  ngOnInit(): void {
    this.generateCalendar();
  }

  generateCalendar() {
    const startOfMonth = this.currentMonth.clone().startOf('month');
    const endOfMonth = this.currentMonth.clone().endOf('month');

    for (let day = startOfMonth.date(); day <= endOfMonth.date(); day++) {
      this.daysInMonth.push(day);
    }
  }

  isToday(date: number): boolean {
    return this.currentMonth.clone().date(date).isSame(moment(), 'day');
  }

  isHoliday(date: number): boolean {
    const dateString = this.currentMonth.clone().date(date).format('YYYY-MM-DD');
    return this.holidays.includes(dateString);
  }
}
