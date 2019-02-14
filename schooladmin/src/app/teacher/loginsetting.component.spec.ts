import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherLoginSittingComponent } from './loginsetting.component';

describe('TeacherLoginSittingComponent', () => {
  let component: TeacherLoginSittingComponent;
  let fixture: ComponentFixture<TeacherLoginSittingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherLoginSittingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherLoginSittingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
