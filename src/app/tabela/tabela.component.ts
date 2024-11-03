import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabela',
  standalone: true,
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss'],
  imports: [ReactiveFormsModule, CommonModule]
})
export class TabelaComponent {
  @Output() pacienteCadastrado = new EventEmitter<any>(); // Emissor de evento

  employeeForm: FormGroup;

  constructor() {
    this.employeeForm = new FormGroup({
      nome: new FormControl(''),
      email: new FormControl(''),
      celular: new FormControl(''),
      cidade: new FormControl(''),
      estado: new FormControl(''),
      codigoPin: new FormControl(''),
      cpf: new FormControl(''),
      endereco: new FormControl(''),
    });
  }

  onSave() {
    if (this.employeeForm.valid) {
      // Emite os dados do paciente
      const pacienteData = this.employeeForm.value; // Obtém os dados do formulário
      this.pacienteCadastrado.emit(pacienteData); // Emite os dados do paciente
      this.employeeForm.reset(); // Reseta o formulário após o envio
    }
  }
}

