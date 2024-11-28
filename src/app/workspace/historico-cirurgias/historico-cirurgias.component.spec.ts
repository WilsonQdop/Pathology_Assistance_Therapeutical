import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoCirurgiasComponent } from './historico-cirurgias.component';

describe('HistoricoCirurgiasComponent', () => {
  let component: HistoricoCirurgiasComponent;
  let fixture: ComponentFixture<HistoricoCirurgiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoricoCirurgiasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricoCirurgiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
