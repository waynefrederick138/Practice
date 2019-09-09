import { LocalStorageService } from './scoresData.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { LocalRefExtractor } from '@angular/core/src/render3/interfaces/node';
import { Shooter } from '../../interfaces/Shooter';

@Component({
  selector: 'app-record-scores',
  templateUrl: './record-scores.component.html',
  styleUrls: ['./record-scores.component.scss']
})
export class RecordScoresComponent implements OnInit {

shooter: Shooter;
selectedOptions: any [];

shooterList = [];

  constructor(private localStorageService: LocalStorageService) {
   }



  ngOnInit() {

    this.shooter = {
      shooterName:  '',
      shooterScore: '',
      shooterOptions: '',
      shooterNotes: ''
    };





    this.updateList();
  }


 addShooter() {
  this.localStorageService.storeOnLocalStorage(
    this.shooter.shooterName,
    this.shooter.shooterScore,
    this.shooter.shooterNotes,
    this.shooter.shooterOptions
    );

  this.updateList();
}

updateList() {
  this.shooterList = this.localStorageService.retrieveShooters();
}

deleteSelectedOptions() {
  alert(this.selectedOptions[0].name);
}


}
