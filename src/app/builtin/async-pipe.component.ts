import { Component, OnInit } from '@angular/core';
import { Observable, Subject, interval, timer } from 'rxjs';
import { namespaceHTML } from '@angular/core/src/render3';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css']
})
export class AsyncPipeComponent implements OnInit {

  constructor() { }
  names$: Observable<any>;
  namesPromise: Promise<any>;
  items: any[] = ['name'];
  ngOnInit() {}

  addToObservable(item) {
    this.items.push(item);
    this.names$ = new Observable(observer => {
      observer.next(this.items.splice(0, this.items.length));
    });
  }

  addToPromise(item) {
    this.items.push(item);
    this.namesPromise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.items), 2000);
    });
  }

}
