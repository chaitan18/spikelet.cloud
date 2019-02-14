import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherManualreviewquestionsComponent } from './manualreviewquestions.component';

describe('TeacherManualreviewquestionsComponent', () => {
  let component: TeacherManualreviewquestionsComponent;
  let fixture: ComponentFixture<TeacherManualreviewquestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherManualreviewquestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherManualreviewquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
