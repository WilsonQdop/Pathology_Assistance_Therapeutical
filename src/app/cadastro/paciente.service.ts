import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PacienteService {
  private pacientes = new BehaviorSubject<any[]>([]); // Armazena a lista de pacientes
  pacientes$ = this.pacientes.asObservable(); // Observable para permitir assinaturas

  // Método para adicionar um paciente à lista
  adicionarPaciente(paciente: any) {
    const pacientesAtualizados = [...this.pacientes.value, paciente];
    this.pacientes.next(pacientesAtualizados); // Atualiza a lista com o novo paciente
  }

  // Método para remover um paciente da lista
  removerPaciente(codigoPin: any) {
    const pacientesAtualizados = this.pacientes.value.filter(p => p.codigoPin !== codigoPin);
    this.pacientes.next(pacientesAtualizados); // Atualiza a lista após remover o paciente
  }
}
