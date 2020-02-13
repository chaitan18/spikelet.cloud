import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherSyllabusComponent } from './syllabusposting.component';

describe('TeacherSyllabusComponent', () => {
  let component: TeacherSyllabusComponent;
  let fixture: ComponentFixture<TeacherSyllabusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherSyllabusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherSyllabusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
