import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getLoginStatusObservable().subscribe((status: boolean) => {
      this.isUserLogged = status;
    });
  
    this.authService.getUsernameObservable().subscribe((username: string | null) => {
      this.username = username || '';

    });
  
  }

  toggleTemplate() {
    this.isUserLogged = !this.isUserLogged;
    if (this.isUserLogged) {
    }
  }




}
