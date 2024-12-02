import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HipocratesComponent } from './hipocrates.component';

describe('HipocratesComponent', () => {
  let component: HipocratesComponent;
  let fixture: ComponentFixture<HipocratesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HipocratesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HipocratesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
