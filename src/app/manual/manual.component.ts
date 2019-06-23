import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BookService } from './BookService';


@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.scss']
})
export class ManualComponent implements OnInit {
term = 'black powder';
sentences: any[];


@ViewChild('pubSearchBox') nameField: ElementRef;
editName(): void {
  this.nameField.nativeElement.focus();
}

  constructor(private bookService: BookService) {
this.bookService = bookService;


  }

  ngOnInit() {
    this.nameField.nativeElement.focus();
    this.editName();

    this.sentences = this.bookService.getSentences();
  }

}
