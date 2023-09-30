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
  impostazioni: string = '';
  switch_expression: string = 'home';
  childStyle: string = '';

  openNav() {
    this.bntStyle = 'open'
    this.body = 'bodyOpen'
  this.childStyle='open'}

  closeNav() {
    this.bntStyle = 'close'
    this.body = 'bodyClosed'
    this.childStyle='close'}


  openImpostazioni() {
    this.impostazioni = 'open'
    this.body = 'bodyOpen'
    this.childStyle='open'}

  closeImpostazioni() {
    this.impostazioni = 'close'
    this.body = 'bodyClosed'
    this.childStyle='close'
  }

  changeComponent(component: string) {
    this.switch_expression = component;
  }
}
