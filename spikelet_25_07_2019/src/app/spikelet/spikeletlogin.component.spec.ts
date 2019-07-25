import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpikeletLoginComponent } from './spikeletlogin.component';

describe('SpikeletLoginComponent', () => {
  let component: SpikeletLoginComponent;
  let fixture: ComponentFixture<SpikeletLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpikeletLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpikeletLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
