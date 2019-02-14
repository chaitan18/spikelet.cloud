import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherSpikeletquestionsComponent } from './spikeletquestions.component';

describe('TeacherSpikeletquestionsComponent', () => {
  let component: TeacherSpikeletquestionsComponent;
  let fixture: ComponentFixture<TeacherSpikeletquestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherSpikeletquestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherSpikeletquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
