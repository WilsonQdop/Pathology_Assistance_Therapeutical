import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedInSubject: BehaviorSubject<boolean>;
  private usernameSubject: BehaviorSubject<string | null>;

  constructor() {
    // Verifica o status de login armazenado no localStorage ao iniciar o serviço
    const storedLoginStatus = localStorage.getItem('isLoggedIn');
    const storedUsername = localStorage.getItem('username');
    this.isLoggedInSubject = new BehaviorSubject<boolean>(storedLoginStatus === 'true');
    this.usernameSubject = new BehaviorSubject<string | null>(storedUsername);
  }

  setLoginStatus(status: boolean, username?: string): void {
    this.isLoggedInSubject.next(status);
    localStorage.setItem('isLoggedIn', status.toString());
  
    if (status && username) {
      this.usernameSubject.next(username);
      localStorage.setItem('username', username);
      console.log('Username salvo no AuthService:', username); // Log para verificar
    } else if (!status) {
      this.usernameSubject.next(null);
      localStorage.removeItem('username');
    }
  }

  getLoginStatus(): boolean {
    return this.isLoggedInSubject.getValue();
  }

  getLoginStatusObservable() {
    return this.isLoggedInSubject.asObservable();
  }
  getUsername(): string | null {
    return this.usernameSubject.getValue();
  }

  getUsernameObservable() {
    return this.usernameSubject.asObservable();
  }

  logout(): void {
    this.setLoginStatus(false);
    this.usernameSubject.next(null);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
  }
}
