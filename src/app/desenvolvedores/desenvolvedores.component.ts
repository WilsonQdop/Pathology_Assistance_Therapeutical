import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-desenvolvedores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './desenvolvedores.component.html',
  styleUrl: './desenvolvedores.component.css'
})
export class DesenvolvedoresComponent {
  developers = [
    { name: 'João Paulo',  photo: 'Jotta.jpg'},
    { name: 'Gustavo Andrews', photo: 'gustavo.jpg'},
    { name: 'Vinicius ',  photo: '#'},
    { name: 'Wilson',  photo: 'Wilson.jpg'},
    
  ];
}
