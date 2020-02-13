import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpquizesHomeComponent } from './spquizeshome.component';

describe('SpquizesHomeComponent', () => {
  let component: SpquizesHomeComponent;
  let fixture: ComponentFixture<SpquizesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpquizesHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpquizesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
