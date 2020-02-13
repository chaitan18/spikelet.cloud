import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { spquiztAddquestionComponent } from './spquiztaddquestion.component';

describe('spquiztAddquestionComponent', () => {
  let component: spquiztAddquestionComponent;
  let fixture: ComponentFixture<spquiztAddquestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ spquiztAddquestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(spquiztAddquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
