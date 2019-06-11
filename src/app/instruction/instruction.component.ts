import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.scss']
})
export class InstructionComponent implements OnInit {
rangeInstructions = 0; // needs to be changed by app.component.ts 

selectSection(x) {
this.rangeInstructions = x;

}
  constructor() { }

  ngOnInit() {
  }

}
