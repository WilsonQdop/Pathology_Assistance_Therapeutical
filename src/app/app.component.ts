import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ListaComponent } from './lista/lista.component';
import { FooterComponent } from './footer/footer.component';
import { TabelaComponent } from './tabela/tabela.component';
import { HipocratesComponent } from './hipocrates/hipocrates.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, TabelaComponent, ListaComponent, FooterComponent,HipocratesComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_18_crud';
  employeeList: any[] = []; // Lista de pacientes

  onPacienteCadastrado(paciente: any) {
    this.employeeList.push(paciente); // Adiciona o paciente à lista
  }
}
