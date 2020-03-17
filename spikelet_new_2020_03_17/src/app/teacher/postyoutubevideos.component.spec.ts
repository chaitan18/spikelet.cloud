import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacheryoutubevideosComponent } from './postyoutubevideos.component';

describe('TeacheryoutubevideosComponent', () => {
  let component: TeacheryoutubevideosComponent;
  let fixture: ComponentFixture<TeacheryoutubevideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacheryoutubevideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacheryoutubevideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
