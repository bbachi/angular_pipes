import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myname-pipe',
  templateUrl: './myname-pipe.component.html',
  styleUrls: ['./myname-pipe.component.css']
})
export class MynamePipeComponent implements OnInit {

  constructor() { }
  name: string;
  ngOnInit() {
  }

}
