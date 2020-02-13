import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { spquiztBulkquestionComponent } from './spquiztbulkquestion.component';

describe('spquiztBulkquestionComponent', () => {
  let component: spquiztBulkquestionComponent;
  let fixture: ComponentFixture<spquiztBulkquestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ spquiztBulkquestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(spquiztBulkquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
