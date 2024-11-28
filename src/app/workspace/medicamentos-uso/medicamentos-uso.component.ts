import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-medicamentos-uso',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './medicamentos-uso.component.html',
  styleUrl: './medicamentos-uso.component.css'
})
export class MedicamentosUsoComponent {
  remedios = [
    { nome: 'Losartana', concentracao: '50 mg', periodicidade: '1/1' },
    { nome: 'Metformina', concentracao: '850 mg', periodicidade: '2/1' },
    { nome: 'Sinvastatina', concentracao: '20 mg', periodicidade: '1' },
    { nome: 'Omeprazol', concentracao: '20 mg', periodicidade: '1' },
  ];
}
