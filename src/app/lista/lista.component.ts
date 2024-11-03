import { Component, Input } from '@angular/core';
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
  showList = false; // Controle para exibir/ocultar a lista

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
    this.employeeList = this.employeeList.filter(p => p.codigoPin !== codigoPin); // Remove o paciente da lista
  }

  // Método para exibir ou ocultar a lista
  toggleList() {
    this.showList = !this.showList; // Alterna a visibilidade da lista
  }
}
