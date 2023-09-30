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
  impostazioni: string='';

  openNav() {
    this.bntStyle = 'open'
    this.body='bodyOpen'
  }

  closeNav() {
    this.bntStyle = 'close'
    this.body='bodyClosed'
  }
  openImpostazioni(){
    this.impostazioni='open'
    this.body='bodyOpen'

  }
  closeImpostazioni(){
    this.impostazioni='close'
    this.body='bodyClosed'

  }
}
