import { Component, OnInit } from '@angular/core';
import { IShooter } from './shooter';

@Component({
  selector: 'app-scoring',
  templateUrl: './scoring.component.html',
  styleUrls: ['./scoring.component.scss']
})

export class ScoringComponent implements OnInit {
shooterName = '';

command = '';
division = '';
weaponsFired = '';
range = '';
dateOfShoot = '';
email = '';



  constructor() { }

  ngOnInit() {
  }

}
