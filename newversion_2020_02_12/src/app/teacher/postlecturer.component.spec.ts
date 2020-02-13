import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherPostlecturerComponent } from './postlecturer.component';

describe('TeacherPostlecturerComponent', () => {
  let component: TeacherPostlecturerComponent;
  let fixture: ComponentFixture<TeacherPostlecturerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherPostlecturerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherPostlecturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
