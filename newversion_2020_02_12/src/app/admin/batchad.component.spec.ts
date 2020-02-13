import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBatchadComponent } from './discussionboard.component';

describe('AdminBatchadComponent', () => {
  let component: AdminBatchadComponent;
  let fixture: ComponentFixture<AdminBatchadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBatchadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBatchadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
