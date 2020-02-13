import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { spquiztViewquestionComponent } from './spquiztviewquestion.component';

describe('spquiztViewquestionComponent', () => {
  let component: spquiztViewquestionComponent;
  let fixture: ComponentFixture<spquiztViewquestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ spquiztViewquestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(spquiztViewquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
