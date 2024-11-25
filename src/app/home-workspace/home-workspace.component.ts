import { Component } from '@angular/core';
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-home-workspace',
  standalone: true,
  imports: [],
  templateUrl: './home-workspace.component.html',
  styleUrl: './home-workspace.component.css'
})
export class HomeWorkspaceComponent {

  usuario: string = ''; 

  constructor(private authService: AuthService) {}
  ngOnInit() {

    this.authService.getUsernameObservable().subscribe((username: string | null) => {
      this.usuario = username || '';
    });

  }
}
