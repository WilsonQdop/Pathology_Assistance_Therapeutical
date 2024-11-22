import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  editando = false;

  paciente = {
    nome: "",
    idade: "",
    tipoSanguineo: "",
    cpf: "",
    endereco: "",
    foto: "" 
  };

  selectedFile: File | null = null;

  toggleEditar(): void {
    this.editando = !this.editando; 
  }

  salvarInformacoes(): void {
    this.editando = false; // Fecha o formulário após salvar
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  uploadExame(): void {
    if (this.selectedFile) {
    } else {
      alert('Por favor, selecione um arquivo!');
    }
  }
}
