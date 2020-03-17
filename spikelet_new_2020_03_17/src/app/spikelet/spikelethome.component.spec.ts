import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpikeletHomeComponent } from './spikelethome.component';

describe('SpikeletHomeComponent', () => {
  let component: SpikeletHomeComponent;
  let fixture: ComponentFixture<SpikeletHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpikeletHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpikeletHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
