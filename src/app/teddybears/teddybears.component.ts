import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teddybears',
  templateUrl: '/teddybears.component.html',
  styleUrls: ['./teddybears.component.css']
})
export class TeddyBearsComponent implements OnInit {
  title = 'Teddy Bears Component Title';
  constructor() { }

  ngOnInit() {
  }

}