import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpikeletHeaderComponent } from './spikeletheader.component';

describe('SpikeletHeaderComponent', () => {
  let component: SpikeletHeaderComponent;
  let fixture: ComponentFixture<SpikeletHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpikeletHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpikeletHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
