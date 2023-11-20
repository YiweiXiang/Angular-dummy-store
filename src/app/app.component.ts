import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-header></app-header>
  <router-outlet></router-outlet>
  <h1 class="text-red-500">text</h1>
  `,
  styles: []
})
export class AppComponent {
  title = 'store';
}
