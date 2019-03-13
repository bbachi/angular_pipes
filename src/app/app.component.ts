import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ DecimalPipe ]
})
export class AppComponent {

  constructor(private decimalPipe: DecimalPipe) {}
  pipeType = 'BI';

  number = this.decimalPipe.transform('3.3666', '2.1-2', 'en');

  showPipes(name) {
     this.pipeType = name;
  }
}
