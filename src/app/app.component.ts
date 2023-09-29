import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  bntStyle: string = '';
  body: string = '';

  openNav() {
    this.bntStyle = 'open'
    this.body='bodyOpen'
  }

  closeNav() {
    this.bntStyle = 'close'
    this.body='bodyClosed'
  }
}
