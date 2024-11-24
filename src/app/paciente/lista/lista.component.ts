import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista',
  standalone: true,
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
  imports: [CommonModule, FormsModule],
})
export class ListaComponent {
  @Input() employeeList: any[] = []; // Recebe a lista de pacientes
  @Output() employeeListChange = new EventEmitter<any[]>(); // Evento para comunicar mudanças na lista
  showList = true; // Controle para exibir/ocultar a lista
  novoPaciente: any = {}; // Objeto para um novo paciente
  searchTerm: string = ''; // Propriedade para armazenar o termo de pesquisa

  // Método para iniciar a edição do paciente
  editPaciente(paciente: any) {
    paciente.isEditing = true; // Define o estado de edição como verdadeiro
  }

  // Método para salvar as alterações do paciente
  saveEdit(paciente: any) {
    paciente.isEditing = false; // Define o estado de edição como falso
  }

  // Método para cancelar a edição
  cancelEdit(paciente: any) {
    paciente.isEditing = false; // Define o estado de edição como falso
  }

  // Método para deletar paciente
  deletePaciente(codigoPin: any) {
    this.employeeList = this.employeeList.filter(p => p.codigoPin !== codigoPin);
    this.employeeListChange.emit(this.employeeList);
  }

  // Método para adicionar um novo paciente
  addPaciente() {
    // Verifica se o novo paciente possui Código PIN e Nome
    if (!this.novoPaciente.codigoPin || !this.novoPaciente.nome) {
      console.error('Código PIN e Nome são obrigatórios!');
      return; // Não adiciona se os campos obrigatórios não estiverem preenchidos
    }

    // Verifica se o Código PIN já existe
    const codigoPinExistente = this.employeeList.some(p => p.codigoPin === this.novoPaciente.codigoPin);
    if (codigoPinExistente) {
      console.error('Código PIN já existente!');
      return; // Não adiciona se o Código PIN já existir
    }

    // Adiciona o novo paciente à lista
    this.employeeList.push({ ...this.novoPaciente });
    this.employeeListChange.emit(this.employeeList); // Emite a nova lista

    // Reseta o objeto do novo paciente
    this.novoPaciente = {};
  }

  // Método para exibir ou ocultar a lista
  toggleList() {
    this.showList = !this.showList; // Alterna a visibilidade da lista
  }

  // Método para filtrar a lista de funcionários
  filteredEmployeeList() {
    return this.employeeList.filter(item => {
      const lowerTerm = this.searchTerm.toLowerCase();
      return (
        item.codigoPin.toLowerCase().includes(lowerTerm) ||
        item.nome.toLowerCase().includes(lowerTerm) ||
        item.celular.toLowerCase().includes(lowerTerm) ||
        item.email.toLowerCase().includes(lowerTerm)
      );
    });
  }
}
