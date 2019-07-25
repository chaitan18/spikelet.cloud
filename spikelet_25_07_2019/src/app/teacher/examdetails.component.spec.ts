import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherExamdetailsComponent } from './examdetails.component';

describe('TeacherExamdetailsComponent', () => {
  let component: TeacherExamdetailsComponent;
  let fixture: ComponentFixture<TeacherExamdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherExamdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherExamdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
