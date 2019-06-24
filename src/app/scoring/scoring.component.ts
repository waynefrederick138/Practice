import { LocalStorageService2 } from './scorecard.service';
import { Component, OnInit } from '@angular/core';
import { IShooter } from './shooter';

@Component({
  selector: 'app-scoring',
  templateUrl: './scoring.component.html',
  styleUrls: ['./scoring.component.scss']
})

export class ScoringComponent implements OnInit {

ship = '';
division = '';
weapons = '9MM';
range = '';
dateOfShoot = '';
email = '';
localStorageArray = [];
index = 0;
scoreCardArraySize = 0;

constructor(private localStorageService2: LocalStorageService2) { }

  ngOnInit() {
    this.localStorageArray = this.localStorageService2.retrieveShip();
    if (this.localStorageArray.length !== 0) {
        this.scoreCardArraySize = this.localStorageArray.length;
        this.index = this.scoreCardArraySize - 1;
        this.getValues();
      } else {
        this.getValues();
      }
  }

  getDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();
    const todayResult = mm + '/' + dd + '/' + yyyy;
    return todayResult;
  }


getValues() {
  if (this.localStorageArray.length > 0) {
    this.ship = this.localStorageArray[this.index].ship;
    this.division = this.localStorageArray[this.index].division;
    this.weapons = this.localStorageArray[this.index].weapons;
    this.range = this.localStorageArray[this.index].location;
    this.dateOfShoot = this.localStorageArray[this.index].dateOfShoot;
    this.email = this.localStorageArray[this.index].email;
    console.log(this.dateOfShoot);
  } else {
    this.ship = '';
    this.division = '';
    this.weapons = '';
    this.range = '';
    this.dateOfShoot = '';
    this.email = '';
  }
}

  backOne() {
    console.log(this.localStorageArray.length);
    console.log(this.index);
    if (this.index > 0) {
      this.index = this.index - 1 ;
      console.log('decreasing by 1');
      this.getValues();
    } else {
      console.log('We are at the beginning already');
    }
  }

  nextOne() {
    console.log(this.localStorageArray.length);
    if (this.index < this.localStorageArray.length - 1) {
      this.index = this.index + 1 ;
      console.log('Increasing by 1');
      this.getValues();
    } else {
      console.log ('No more in the array...');
    }
  }

  saveGunShoot() {
    this.localStorageService2.storeOnLocalStorage(this.ship, this.division, this.weapons, this.range, this.dateOfShoot, this.email);
  }

  deleteThisShoot() {
    this.localStorageArray = this.localStorageService2.deleteShip(this.index);
    this.ngOnInit();


  }





}
