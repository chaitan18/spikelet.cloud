import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherClassbehaviourComponent } from './postclassbehaviour.component';

describe('TeacherClassbehaviourComponent', () => {
  let component: TeacherClassbehaviourComponent;
  let fixture: ComponentFixture<TeacherClassbehaviourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherClassbehaviourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherClassbehaviourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
