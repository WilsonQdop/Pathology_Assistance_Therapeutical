import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TelefonePipePipe } from './telefone-pipe.pipe';
import { CpfPipePipe } from './cpf-pipe.pipe';

@Component({
  selector: 'app-tabela',
  standalone: true,
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss'],
  imports: [ReactiveFormsModule, CommonModule, TelefonePipePipe, CpfPipePipe]
})
export class TabelaComponent {
  @Output() pacienteCadastrado = new EventEmitter<any>(); // Emissor de evento

  employeeForm: FormGroup;
  ordemAtual = 1;
  formVisible = true; 

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
    this.formVisible = !this.formVisible; 
  }

  onSave() {
    if (this.employeeForm.valid) {
      const pacienteData = this.employeeForm.value; // Obtém os dados do formulário
      this.pacienteCadastrado.emit(pacienteData); 
      this.ordemAtual++;
      this.employeeForm.reset();
    } else {
      alert('Preencha todos os campos!');
    }
  }
}
