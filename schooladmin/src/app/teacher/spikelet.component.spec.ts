import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherSpikeletComponent } from './spikelet.component';

describe('TeacherSpikeletComponent', () => {
  let component: TeacherSpikeletComponent;
  let fixture: ComponentFixture<TeacherSpikeletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherSpikeletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherSpikeletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
