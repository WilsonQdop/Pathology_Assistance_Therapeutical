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
    { name: 'João Pedro', contact: '(81) 9880-1195', photo: 'Jotta.jpg'},
    { name: 'Gustavo Andrew', contact: '(81) 8210-4778', photo: 'gustavo.jpg'},
    { name: 'Vinicius Souza ', contact: '(81) 9435-6528',  photo: 'vinicius.jpg'},
    { name: 'Wilson Francisco',  contact: '(81) 8843-0765', photo: 'Wilson.jpg'},
    
  ];
}
