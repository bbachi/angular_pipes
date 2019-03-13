import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-percent-pipe',
  templateUrl: './percent-pipe.component.html',
  styleUrls: ['./percent-pipe.component.css']
})
export class PercentPipeComponent implements OnInit {

  constructor() { }
  myNumber: number;
  ngOnInit() {
  }

}
