import {Component} from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  stylish: string = '';

  openNav() {
    this.stylish = 'open';
  }

  closeNav() {
    this.stylish = 'close';
  }
}
