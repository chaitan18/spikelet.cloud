import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherStudenthomeworkComponent } from './studenthomework.component';

describe('TeacherStudenthomeworkComponent', () => {
  let component: TeacherStudenthomeworkComponent;
  let fixture: ComponentFixture<TeacherStudenthomeworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherStudenthomeworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherStudenthomeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
