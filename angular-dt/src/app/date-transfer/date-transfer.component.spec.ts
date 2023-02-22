import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateTransferComponent } from './date-transfer.component';

describe('DateTransferComponent', () => {
  let component: DateTransferComponent;
  let fixture: ComponentFixture<DateTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateTransferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
