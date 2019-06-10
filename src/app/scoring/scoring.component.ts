import { Component, OnInit } from '@angular/core';
import { IShooter } from './shooter';

@Component({
  selector: 'app-scoring',
  templateUrl: './scoring.component.html',
  styleUrls: ['./scoring.component.scss']
})
export class ScoringComponent implements OnInit {
shooterName = '';

 shootersGroup: IShooter[] = [
  { shooterId: 1, shooterName: 'Joe Jack', shooterScore: 22, shooterRun() { return(this.shooterName); } },
  { shooterId: 2, shooterName: 'Kevin Mitnick', shooterScore: 33, shooterRun() { return this.shooterScore * 2; } },
  { shooterId: 3, shooterName: 'Michael Grubbs', shooterScore: 99, shooterRun() { return this.shooterScore * 3; } }
];



shooters: any[] = [
{
  shooterId: 1,
  name: 'Brian',
  score: '200'
},
{
  shooterId: 2,
  name: 'Joe',
  score: '190'
},
{
  shooterId: 3,
  name: 'Rudy',
  score: '210'
}
];


  constructor() { }

  ngOnInit() {
    console.log('ngOnInit method implemtation...');
  }

}
