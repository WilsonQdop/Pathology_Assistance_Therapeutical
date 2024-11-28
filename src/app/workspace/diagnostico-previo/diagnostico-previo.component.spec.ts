import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticoPrevioComponent } from './diagnostico-previo.component';

describe('DiagnosticoPrevioComponent', () => {
  let component: DiagnosticoPrevioComponent;
  let fixture: ComponentFixture<DiagnosticoPrevioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiagnosticoPrevioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiagnosticoPrevioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
