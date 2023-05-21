import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicNationalComponent } from './medic-national.component';

describe('MedicNationalComponent', () => {
  let component: MedicNationalComponent;
  let fixture: ComponentFixture<MedicNationalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicNationalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicNationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
