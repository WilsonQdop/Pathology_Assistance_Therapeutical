import { Component } from '@angular/core';
import { AsideComponent } from '../../aside/aside.component';
import { CadastroComponent } from '../../paciente/cadastro/cadastro.component';
import { ListaComponent } from '../../paciente/lista/lista.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-workspace-page',
  standalone: true,
  imports: [AsideComponent, CadastroComponent, ListaComponent, FormsModule, CommonModule],
  templateUrl: './workspace-page.component.html',
  styleUrl: './workspace-page.component.css'
})
export class WorkspacePageComponent {
  mostrarCadastro = false;
  mostrarPacientes = false;

  // Lógica para alternar entre as opções
  onSelectOption(option: string) {
    if (option === 'cadastro') {
      this.mostrarCadastro = true;
      this.mostrarPacientes = false;
    } else if (option === 'pacientes') {
      this.mostrarCadastro = false;
      this.mostrarPacientes = true;
    }
  }
}
