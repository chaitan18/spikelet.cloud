import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherDiscussionComponent } from './discussionboard.component';

describe('TeacherDiscussionComponent', () => {
  let component: TeacherDiscussionComponent;
  let fixture: ComponentFixture<TeacherDiscussionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherDiscussionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherDiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
