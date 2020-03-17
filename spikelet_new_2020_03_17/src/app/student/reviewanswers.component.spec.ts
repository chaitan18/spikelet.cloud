import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentReviewanswerComponent } from './reviewanswers.component';

describe('StudentReviewanswerComponent', () => {
  let component: StudentReviewanswerComponent;
  let fixture: ComponentFixture<StudentReviewanswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentReviewanswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentReviewanswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
