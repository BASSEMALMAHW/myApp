import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colors: Array<string>;
  title: string;
  selectedColer: string;
  constructor() {
    this.title = 'myApp';
    this.colors = ['red', 'green', 'blue'];
    this.selectedColer = '';
  }
  refreshData() { }

  click(name: string) { console.log(name);}


}
