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
  text1: string = '';
  text2: string = '';
  similarity: number | null = null;

  compareTexts(): void {
    const similarity = this.calculateSimilarity(this.text1, this.text2);
    this.similarity = similarity;
  }

  calculateSimilarity(text1: string, text2: string): number {
    if (!text1 && !text2) {
      return 100;
    }

    const set1 = new Set(text1.split(''));
    const set2 = new Set(text2.split(''));
    const intersection = new Set([...set1].filter(x => set2.has(x)));
    const union = new Set([...set1, ...set2]);

    return (intersection.size / union.size) * 100;
  }
}
