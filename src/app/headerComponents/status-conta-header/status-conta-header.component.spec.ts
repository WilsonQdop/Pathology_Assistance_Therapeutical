import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusContaHeaderComponent } from './status-conta-header.component';

describe('StatusContaHeaderComponent', () => {
  let component: StatusContaHeaderComponent;
  let fixture: ComponentFixture<StatusContaHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusContaHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusContaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
