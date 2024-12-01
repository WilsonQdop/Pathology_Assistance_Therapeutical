import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-diagnostico-previo',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './diagnostico-previo.component.html',
  styleUrl: './diagnostico-previo.component.css'
})
export class DiagnosticoPrevioComponent {
  diagnostico = [
    { cod: '55', tipo: 'Hipertensão arterial', responsavel: 'Jorge Aragão', data: '10/01/2021' },
    { cod: '13', tipo: 'Diabetes mellitus tipo 2', responsavel: 'José Neves', data: '15/02/2018' },
    { cod: '12', tipo: 'Dislipidemia', responsavel: 'Maria Silva', data: '20/12/2016' },
    { cod: '11', tipo: 'Gastrite crônica', responsavel: 'João Santos', data: '30/04/2012' },
  ];
}
