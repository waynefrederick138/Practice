import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordScoresComponent } from './record-scores.component';

describe('RecordScoresComponent', () => {
  let component: RecordScoresComponent;
  let fixture: ComponentFixture<RecordScoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordScoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
