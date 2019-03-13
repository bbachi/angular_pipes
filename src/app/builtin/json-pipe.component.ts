import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json-pipe',
  templateUrl: './json-pipe.component.html',
  styleUrls: ['./json-pipe.component.css']
})
export class JsonPipeComponent implements OnInit {

  constructor() { }
  person = {firstName: 'first', lastName: 'last',
            address:
            {stretNumber: '0000', streetName: '1st street', city: 'newcity', state: 'ST', zipcode: '00000'}};
  ngOnInit() {
  }

}
