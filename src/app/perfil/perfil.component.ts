import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  editando = false;
  abaSelecionada = 'Comorbidades'; // Aba padrão selecionada
  abas = [
    'Comorbidades',
    //'Alergias conhecidas',
    'Medicamentos em uso contínuo',
    'Histórico familiar de doenças',
    'Histórico de cirurgias',
    'Vacinas',
    'Diagnósticos prévios',
    //'IMC',
    'Histórico de internações',
    'exames realizados',
    'consultas',
    'médicos consultados',
    'Histórico de exames genéticos realizados',
    'Exames laboratoriais periódicos',
    //'Convênio médico',
    //'Número do cartão SUS',
    //'Autorização para compartilhamento de dados',
    'Hábitos de vida',
    'Dados ambientais',
  ];

  paciente = {
    nome: '',
    idade: '',
    tipoSanguineo: '',
    cpf: '',
    endereco: '',
    foto: '',
    arquivos: [] as { nome: string; data: string }[],
  };

  selectedFile: File | null = null;

  toggleEditar(): void {
    this.editando = !this.editando;
  }

  salvarInformacoes(): void {
    this.editando = false;
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  uploadExame(): void {
    if (this.selectedFile) {
      const dataHora = new Date().toLocaleString();
      this.paciente.arquivos.push({ nome: this.selectedFile.name, data: dataHora });
      this.selectedFile = null;
    } else {
      alert('Por favor, selecione um arquivo!');
    }
  }

  selecionarAba(aba: string): void {
    this.abaSelecionada = aba;
  }
}
