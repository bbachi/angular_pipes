import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uppercase-pipe',
  templateUrl: './uppercase-pipe.component.html',
  styleUrls: ['./uppercase-pipe.component.css']
})
export class UppercasePipeComponent implements OnInit {

  constructor() { }
  name: string;
  ngOnInit() {
  }

}
