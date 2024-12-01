import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWorkspaceComponent } from './home-workspace.component';

describe('HomeWorkspaceComponent', () => {
  let component: HomeWorkspaceComponent;
  let fixture: ComponentFixture<HomeWorkspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeWorkspaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeWorkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
