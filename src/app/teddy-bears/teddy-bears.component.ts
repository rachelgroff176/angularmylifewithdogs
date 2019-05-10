import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teddy-bears',
  templateUrl: '../app.component.html',
  styleUrls: ['./teddy-bears.component.css']
})
export class TeddyBearsComponent implements OnInit {
  title = 'Teddy Bears Title';
  constructor() { }

  ngOnInit() {
  }

}