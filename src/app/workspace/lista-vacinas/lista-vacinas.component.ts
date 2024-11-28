import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-vacinas',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './lista-vacinas.component.html',
  styleUrl: './lista-vacinas.component.css'
})
export class ListaVacinasComponent {

  vacinas = [
    { vacina: 'Hepatite B', data: '17/12/2024', status: 'Confirmada' },
    { vacina: 'Tétano e difteria (dT)', data: '17/12/2024', status: 'Pendente' },
    { vacina: 'Influenza', data: '17/12/2024', status: 'Pendente' },
    { vacina: 'COVID-19', data: '17/12/2024', status: 'Confirmada' },
    { vacina: 'Febre Amarela', data: '17/12/2024', status: 'Pendente' },
    { vacina: 'Pneumocócica 23', data: '17/12/2024', status: 'Confirmada' },
  ];

}
