import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationMessageComponent } from './confirmation-message.component';

describe('ConfimationMessageComponent', () => {
  let component: ConfirmationMessageComponent;
  let fixture: ComponentFixture<ConfirmationMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmationMessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmationMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
