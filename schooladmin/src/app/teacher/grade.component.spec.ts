import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherGradeComponent } from './grade.component';

describe('TeacherGradeComponent', () => {
  let component: TeacherGradeComponent;
  let fixture: ComponentFixture<TeacherGradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherGradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
