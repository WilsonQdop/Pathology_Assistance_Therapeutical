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
  showList = true; 
  novoPaciente: any = {}; 
  searchTerm: string = ''; 

 
  editPaciente(paciente: any) {
    paciente.isEditing = true; 
  }

 
  saveEdit(paciente: any) {
    paciente.isEditing = false; 
  }


  cancelEdit(paciente: any) {
    paciente.isEditing = false; 
  }


  deletePaciente(codigoPin: any) {
    this.employeeList = this.employeeList.filter(p => p.codigoPin !== codigoPin);
    this.employeeListChange.emit(this.employeeList);
  }


  addPaciente() {
    // Verifica se o novo paciente possui Código PIN e Nome
    if (!this.novoPaciente.codigoPin || !this.novoPaciente.nome) {
      console.error('Código PIN e Nome são obrigatórios!');
      return; 
    }

  
    const codigoPinExistente = this.employeeList.some(p => p.codigoPin === this.novoPaciente.codigoPin);
    if (codigoPinExistente) {
      console.error('Código PIN já existente!');
      return; 
    }

    // Adiciona o novo paciente à lista
    this.employeeList.push({ ...this.novoPaciente });
    this.employeeListChange.emit(this.employeeList); // Emite a nova lista

    // Reseta o objeto do novo paciente
    this.novoPaciente = {};
  }

  
  toggleList() {
    this.showList = !this.showList; // Alterna a visibilidade da lista
  }


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
