import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentosUsoComponent } from './medicamentos-uso.component';

describe('MedicamentosUsoComponent', () => {
  let component: MedicamentosUsoComponent;
  let fixture: ComponentFixture<MedicamentosUsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicamentosUsoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicamentosUsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
