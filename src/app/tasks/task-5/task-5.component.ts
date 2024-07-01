import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-5',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-5.component.html',
  styleUrl: './task-5.component.scss'
})
export class Task5Component {
  value1: string = '';
  value2: string = '';
  results: { value: string, percentage: number }[] = [];

  calculateMatch(): void {
    this.results = [];
    const values = this.value2.split(',').map(v => v.trim());

    values.forEach(value => {
      const matchPercentage = this.getMatchPercentage(this.value1, value);
      this.results.push({ value: value, percentage: matchPercentage });
    });
  }

  getMatchPercentage(str1: string, str2: string): number {
    const len = Math.max(str1.length, str2.length);
    let matches = 0;

    for (let i = 0; i < len; i++) {
      if (str1[i] === str2[i]) {
        matches++;
      }
    }

    return (matches / len) * 100;
  }
}
