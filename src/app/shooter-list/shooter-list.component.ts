import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shooter-list',
  templateUrl: './shooter-list.component.html',
  styleUrls: ['./shooter-list.component.scss']
})
export class ShooterListComponent implements OnInit {

  constructor() { }


   shooters = [
    {
      name: 'Brian Watkins',
      age: 44,
      nhqc: '240'
    },
    {
      name: 'Brian Watkins',
      age: 44,
      nhqc: '240'
    },
    {
      name: 'Brian Watkins',
      age: 44,
      nhqc: '240'
    }
  ];
  ngOnInit() {
  }

}
