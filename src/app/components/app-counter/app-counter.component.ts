import { Component, OnInit } from '@angular/core';

//this ts file is backbone for a component

@Component({
  selector: 'app-counter',
  templateUrl: './app-counter.component.html',
  styleUrls: ['./app-counter.component.css']
})
export class AppCounterComponent implements OnInit {


  count: number;

  constructor() { }

  ngOnInit(): void {
    this.count = 0;
  }

  incr() {
    this.count++;
  }

  decr() {
    this.count--;
  }

}