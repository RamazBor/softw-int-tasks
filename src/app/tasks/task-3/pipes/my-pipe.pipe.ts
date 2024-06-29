import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe',
  standalone: true,
})
export class MyPipePipe implements PipeTransform {
  transform(value: any): any {
    if (value.constructor === Date) {
      const res = new Intl.DateTimeFormat('en-GB', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        month: 'short',
        day: '2-digit',
        year: 'numeric',
      }).format(value);
      return res;
    }
    return value;
  }
}
