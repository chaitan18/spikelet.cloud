import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { teacherRegisterComponent } from './register.component';

describe('teacherRegisterComponent', () => {
  let component: teacherRegisterComponent;
  let fixture: ComponentFixture<teacherRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ teacherRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(teacherRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
