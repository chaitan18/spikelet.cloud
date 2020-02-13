import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpquizesDashboardComponent } from './spquizesdashboard.component';

describe('SpquizesDashboardComponent', () => {
  let component: SpquizesDashboardComponent;
  let fixture: ComponentFixture<SpquizesDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpquizesDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpquizesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
