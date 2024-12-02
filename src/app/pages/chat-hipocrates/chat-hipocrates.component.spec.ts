import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatHipocratesComponent } from './chat-hipocrates.component';
import { HomeWorkspaceComponent } from '../workspace/workspace-content/home-workspace/home-workspace.component';


describe('ChatHipocratesComponent', () => {
  let component: ChatHipocratesComponent;
  let fixture: ComponentFixture<ChatHipocratesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatHipocratesComponent, HomeWorkspaceComponent]
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
