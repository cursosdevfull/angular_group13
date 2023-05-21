import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicSpecialtyComponent } from './medic-specialty.component';

describe('MedicSpecialtyComponent', () => {
  let component: MedicSpecialtyComponent;
  let fixture: ComponentFixture<MedicSpecialtyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicSpecialtyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicSpecialtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
