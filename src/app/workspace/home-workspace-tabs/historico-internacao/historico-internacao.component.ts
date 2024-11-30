import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-historico-internacao',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './historico-internacao.component.html',
  styleUrl: './historico-internacao.component.css'
})
export class HistoricoInternacaoComponent {
  internacao = [
    { cod: '1245', tipo: 'Cálculo renal', responsavel: 'Jorge Aragão', dataEntrada : '10/01/2021', dataSaida: '15/01/2021' },
    { cod: '958', tipo: 'Apendicectomia', responsavel: 'Maria Silva', dataEntrada: '09/01/2021', dataSaida: '11/01/2021' },
    { cod: '1111', tipo: 'Crise hipertensiva', responsavel: 'José Neves', dataEntrada: '15/02/2018', dataSaida: '17/02/2018' },
  ];
}
