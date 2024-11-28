import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatHipocratesComponent } from './chat-hipocrates.component';

describe('ChatHipocratesComponent', () => {
  let component: ChatHipocratesComponent;
  let fixture: ComponentFixture<ChatHipocratesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatHipocratesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatHipocratesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
