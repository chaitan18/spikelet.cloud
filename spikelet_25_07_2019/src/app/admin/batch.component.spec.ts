import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBatchComponent } from './discussionboard.component';

describe('AdminBatchComponent', () => {
  let component: AdminBatchComponent;
  let fixture: ComponentFixture<AdminBatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
