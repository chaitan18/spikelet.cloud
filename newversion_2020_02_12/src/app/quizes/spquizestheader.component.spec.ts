import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpquizestHeaderComponent } from './spquizestheader.component';

describe('SpquizestHeaderComponent', () => {
  let component: SpquizestHeaderComponent;
  let fixture: ComponentFixture<SpquizestHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpquizestHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpquizestHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
