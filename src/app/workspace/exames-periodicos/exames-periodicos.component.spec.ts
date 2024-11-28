import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamesPeriodicosComponent } from './exames-periodicos.component';

describe('ExamesPeriodicosComponent', () => {
  let component: ExamesPeriodicosComponent;
  let fixture: ComponentFixture<ExamesPeriodicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamesPeriodicosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamesPeriodicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
