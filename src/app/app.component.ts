import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<app-header /> <router-outlet />`,
  imports: [RouterOutlet, HeaderComponent],
})
export class AppComponent {
  title = 'angular-tasks';
}
