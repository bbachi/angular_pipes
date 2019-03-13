import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lowercase-pipe',
  templateUrl: './lowercase-pipe.component.html',
  styleUrls: ['./lowercase-pipe.component.css']
})
export class LowercasePipeComponent implements OnInit {

  constructor() { }
  name: string;
  ngOnInit() {
  }

}
