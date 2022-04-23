import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular-bundle-size';
  show = Math.random();
  arr = new Array(2000);
}
