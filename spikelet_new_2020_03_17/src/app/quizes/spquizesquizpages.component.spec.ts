import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpquizesQuizpageComponent } from './spquizesquizpages.component';

describe('SpquizesQuizpageComponent', () => {
  let component: SpquizesQuizpageComponent;
  let fixture: ComponentFixture<SpquizesQuizpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpquizesQuizpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpquizesQuizpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
