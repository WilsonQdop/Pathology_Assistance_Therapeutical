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
  ordemAtual = 1;
  formVisible = true; // Variável que controla a visibilidade do formulário

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
      ordem: new FormControl(''),
    });
  }

  toggleForm() {
    this.formVisible = !this.formVisible; // Alterna a visibilidade do formulário
  }

  onSave() {
    console.log('Formulário salvo:', this.employeeForm.value); // Log dos dados do formulário
    if (this.employeeForm.valid) {
      const pacienteData = this.employeeForm.value; // Obtém os dados do formulário
      this.pacienteCadastrado.emit(pacienteData); // Emite os dados do paciente
      this.ordemAtual++;
      this.employeeForm.reset(); // Reseta o formulário após o envio
    } else {
      console.error('Formulário inválido!', this.employeeForm.errors);
    }
  }
}
