import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteWorkspaceComponent } from './paciente-workspace.component';

describe('PacienteWorkspaceComponent', () => {
  let component: PacienteWorkspaceComponent;
  let fixture: ComponentFixture<PacienteWorkspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacienteWorkspaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacienteWorkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
