import { LocalStorageService } from './scoresData.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { LocalRefExtractor } from '@angular/core/src/render3/interfaces/node';

@Component({
  selector: 'app-record-scores',
  templateUrl: './record-scores.component.html',
  styleUrls: ['./record-scores.component.scss']
})
export class RecordScoresComponent implements OnInit {

shooterName = '';
shooterScore = '';
shooterNotes = '';
shooterOptions = '';
shooterList = [];
  constructor(private localStorageService: LocalStorageService) {
   }



  ngOnInit() {
    this.updateList();
  }


 addShooter() {
  this.localStorageService.storeOnLocalStorage(this.shooterName, this.shooterScore, this.shooterNotes, this.shooterOptions);
  this.updateList();
}

updateList() {
  this.shooterList = this.localStorageService.retrieveShooters();
}




}
