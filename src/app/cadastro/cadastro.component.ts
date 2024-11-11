import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { HipocratesComponent } from "../hipocrates/hipocrates.component";
import { ListaComponent } from "../lista/lista.component";
import { TabelaComponent } from "../tabela/tabela.component";

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,ListaComponent,TabelaComponent,HipocratesComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  title = 'angular_18_crud';
  employeeList: any[] = []; // Lista de pacientes

  onPacienteCadastrado(paciente: any) {
    this.employeeList.push(paciente); // Adiciona o paciente à lista
  }
}

