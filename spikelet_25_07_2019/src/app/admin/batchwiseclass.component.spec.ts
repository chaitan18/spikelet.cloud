import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBatchwiseclassComponent } from './batchwiseclass.component';

describe('AdminBatchwiseclassComponent', () => {
  let component: AdminBatchwiseclassComponent;
  let fixture: ComponentFixture<AdminBatchwiseclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBatchwiseclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBatchwiseclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
