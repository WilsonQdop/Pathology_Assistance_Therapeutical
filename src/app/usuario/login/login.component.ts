import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';  // Importe o Router
import { AuthService } from '../../auth-service.service';
import { consumerBeforeComputation } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = "";
  password: string = "";

  constructor(private authService: AuthService, private router: Router) {}  // Injete o Router no construtor

  onLogin(event: Event) {
    event.preventDefault();
  
    const username = this.username;
    const password = this.password;
  
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: any) => u.username === username && u.password === password);
  
    if (user) {
      console.log('Usuário encontrado:', user.username); // Log para verificar
      this.authService.setLoginStatus(true, user.username); // Certifique-se de passar o username correto
      this.router.navigate(['/workspace']);
    } else {
      this.authService.setLoginStatus(false);
      alert("Usuário ou senha inválidos.");
    }
  }
}
