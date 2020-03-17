import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tested } from './discussionboard.component';

describe('Tested', () => {
  let component: Tested;
  let fixture: ComponentFixture<Tested>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tested ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tested);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
