import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaliseHipocratesComponent } from './analise-hipocrates.component';

describe('AnaliseHipocratesComponent', () => {
  let component: AnaliseHipocratesComponent;
  let fixture: ComponentFixture<AnaliseHipocratesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnaliseHipocratesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnaliseHipocratesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
