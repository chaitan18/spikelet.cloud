import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherReviewquestionsComponent } from './reviewquestions.component';

describe('TeacherReviewquestionsComponent', () => {
  let component: TeacherReviewquestionsComponent;
  let fixture: ComponentFixture<TeacherReviewquestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherReviewquestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherReviewquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
