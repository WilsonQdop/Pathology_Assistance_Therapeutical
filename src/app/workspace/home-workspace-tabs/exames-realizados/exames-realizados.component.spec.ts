import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamesRealizadosComponent } from './exames-realizados.component';

describe('ExamesRealizadosComponent', () => {
  let component: ExamesRealizadosComponent;
  let fixture: ComponentFixture<ExamesRealizadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamesRealizadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamesRealizadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
