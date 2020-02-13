import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpquizesQuiztestComponent } from './spquizesquiztest.component';

describe('SpquizesQuiztestComponent', () => {
  let component: SpquizesQuiztestComponent;
  let fixture: ComponentFixture<SpquizesQuiztestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpquizesQuiztestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpquizesQuiztestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
