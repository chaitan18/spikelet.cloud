import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherPosthomeworkComponent } from './posthomework.component';

describe('TeacherPosthomeworkComponent', () => {
  let component: TeacherPosthomeworkComponent;
  let fixture: ComponentFixture<TeacherPosthomeworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherPosthomeworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherPosthomeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
