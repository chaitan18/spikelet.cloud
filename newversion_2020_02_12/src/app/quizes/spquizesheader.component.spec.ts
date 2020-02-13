import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpquizesHeaderComponent } from './spquizesheader.component';

describe('SpquizesHeaderComponent', () => {
  let component: SpquizesHeaderComponent;
  let fixture: ComponentFixture<SpquizesHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpquizesHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpquizesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
