import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-impostazioni',
  templateUrl: './impostazioni.component.html',
  styleUrls: ['./impostazioni.component.css']
})
export class ImpostazioniComponent {
  @Input() impostazioniStile!: string;

}
