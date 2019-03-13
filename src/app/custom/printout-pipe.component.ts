import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-printout-pipe',
  templateUrl: './printout-pipe.component.html',
  styleUrls: ['./printout-pipe.component.css']
})
export class PrintoutPipeComponent implements OnInit {

  constructor() { }
  items: any = ['initail item'];
  ngOnInit() {
  }

  add(item) {
    this.items.push(item);
  }
}
