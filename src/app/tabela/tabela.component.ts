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

  constructor() {
    this.employeeForm = new FormGroup({
      nome: new FormControl('', { validators: [/* Adicione suas validações aqui, se necessário */] }),
      email: new FormControl('', { validators: [/* Adicione suas validações aqui, se necessário */] }),
      celular: new FormControl('', { validators: [/* Adicione suas validações aqui, se necessário */] }),
      cidade: new FormControl('', { validators: [/* Adicione suas validações aqui, se necessário */] }),
      estado: new FormControl('', { validators: [/* Adicione suas validações aqui, se necessário */] }),
      codigoPin: new FormControl('', { validators: [/* Adicione suas validações aqui, se necessário */] }),
      cpf: new FormControl('', { validators: [/* Adicione suas validações aqui, se necessário */] }),
      endereco: new FormControl('', { validators: [/* Adicione suas validações aqui, se necessário */] }),
      ordem: new FormControl('', { validators: [/* Adicione suas validações aqui, se necessário */] }),
    });
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


