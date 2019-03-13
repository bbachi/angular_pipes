import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyvalue-pipe',
  templateUrl: './keyvalue-pipe.component.html',
  styleUrls: ['./keyvalue-pipe.component.css']
})
export class KeyvaluePipeComponent implements OnInit {

  constructor() { }
  person = {firstName: 'first', lastName: 'last', age: 12};
  persons = [{firstName: 'first0', lastName: 'last0', age: 85}, {firstName: 'first1', lastName: 'last1', age: 67}];
  personMap = new Map([[0, this.persons[0]], [1, this.persons[1]]]);
  names = {zebra: 25, jacob: 45, brendan: 98, donald: 109};
  ngOnInit() {
  }

  orderByNames(key1, key2) {
    if (key1.key < key2.key) {return -1; }
    if (key1.key > key2.key) {return 1; }
    return 0;
  }

}
