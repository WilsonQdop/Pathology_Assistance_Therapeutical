import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-resumo-dia',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './resumo-dia.component.html',
  styleUrl: './resumo-dia.component.css'
})
export class ResumoDiaComponent {
  atendimento = [
    { paciente: 'João Silva', data: '17/12/2024', hora: '13:00', status: 'Confirmada' },
    { paciente: 'Maria Oliveira', data: '17/12/2024', hora: '13:30', status: 'Pendente' },
    { paciente: 'Carlos Santos', data: '17/12/2024', hora: '14:00', status: 'Pendente' },
    { paciente: 'Ana Costa', data: '17/12/2024', hora: '14:30', status: 'Confirmada' },
    { paciente: 'Pedro Lima', data: '17/12/2024', hora: '15:00', status: 'Pendente' },
    { paciente: 'Marta Souza', data: '17/12/2024', hora: '15:30', status: 'Confirmada' },
    { paciente: 'Joaquim Almeida', data: '17/12/2024', hora: '16:00', status: 'Pendente' },
  ];
}
