import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titlecase-pipe',
  templateUrl: './titlecase-pipe.component.html',
  styleUrls: ['./titlecase-pipe.component.css']
})
export class TitlecasePipeComponent implements OnInit {

  constructor() { }
  name: string;
  ngOnInit() {
  }

}
