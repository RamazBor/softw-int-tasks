import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, TemplateRef, ViewChild, ViewContainerRef, model } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatCalendar, MatCalendarCellCssClasses, MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-task-4',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatCardModule,
    MatDatepickerModule,
    DatePipe
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './task-4.component.html',
  styleUrl: './task-4.component.scss',
})
export class Task4Component {

  minDate = this.getDateOffset(-30);
  maxDate = this.getDateOffset(30);
  selectedDate: Date = new Date();
  datesToHighlight = [
    this.getDateOffset(-2),
    this.getDateOffset(4),
    this.getDateOffset(8),
    this.getDateOffset(30),
  ];

  dateClass() {
    return (date: Date): MatCalendarCellCssClasses => {
      const highlightDate = this.datesToHighlight.some((d) =>
        this.isDateEqual(d, date)
      );

      return highlightDate ? 'highlight-date' : '';
    };
  }

  onSelect(event: Date | null) {
    console.log(event);
    if (event) {
      this.selectedDate = event;
    }
  }

  isDateEqual(date1: Date, date2: Date): boolean {
    return (

      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  }

  getDateOffset(days: number): Date {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date;
  }
}
