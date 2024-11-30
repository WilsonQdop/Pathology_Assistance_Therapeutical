import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-historico-cirurgias',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './historico-cirurgias.component.html',
  styleUrl: './historico-cirurgias.component.css'
})
export class HistoricoCirurgiasComponent {
  cirurgias = [
    { cod: '123', nome: 'João Silva', tipo: 'Apendicectomia', responsavel: 'Jorge Aragão', data: '10/01/2021' },
    { cod: '456', nome: 'João Silva', tipo: 'Retirada de cálculo renal', responsavel: 'José Neves', data: '15/02/2018' },
  ];
}
