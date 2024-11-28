import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Importa o Router
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-status-conta-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status-conta-header.component.html',
  styleUrls: ['./status-conta-header.component.css']
})
export class StatusContaHeaderComponent implements OnInit {
  isUserLogged: boolean = false;
  username: string = '';
  showMenu: boolean = false;  

  constructor(private authService: AuthService, private router: Router) {}  // Injeção do Router

  ngOnInit() {
    this.authService.getLoginStatusObservable().subscribe((status: boolean) => {
      this.isUserLogged = status;
      this.showMenu = false;
    });
  
    this.authService.getUsernameObservable().subscribe((username: string | null) => {
      this.username = username || '';
    });
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;  // Alterna a exibição do menu
  }

  logout() {
    this.authService.logout();  // Implementar lógica de logout no seu AuthService
    this.showMenu = false;
    this.isUserLogged = false;
    
    

    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 1000); // 2 segundos (2000 milissegundos)
  }
}
