import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicForeignComponent } from './medic-foreign.component';

describe('MedicForeignComponent', () => {
  let component: MedicForeignComponent;
  let fixture: ComponentFixture<MedicForeignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicForeignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicForeignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
