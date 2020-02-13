import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDiscussionboardComponent } from './discussionboard.component';

describe('StudentDiscussionboardComponent', () => {
  let component: StudentDiscussionboardComponent;
  let fixture: ComponentFixture<StudentDiscussionboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentDiscussionboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDiscussionboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
